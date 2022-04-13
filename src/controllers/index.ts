import { Request, Response } from "express";
import * as services from "../services/battleService.js";

export async function ranking (req: Request, res: Response) {
    const result = await services.ranking()
    res.send({ fighters: result.rows })
}

export async function battle (req: Request, res: Response) {
    const result = await services.battleService(req.body)
    if (result === 'first') {
        res.send(
            {
                winner: req.body.firstUser,
                loser: req.body.secondUser,
                draw: false
            }
        )
    } else if (result === 'second') {
        res.send(
            {
                winner: req.body.secondUser,
                loser: req.body.firstUser,
                draw: false
            }
        )
    } else {
        res.send(
            {
                winner: null,
                loser: null,
                draw: true
            }
        )
    }
}