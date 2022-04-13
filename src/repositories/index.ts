import connection from "../database.js";

export async function verifyUser (user: string){
    const arrUser = await connection.query(`SELECT id FROM fighters WHERE username=$1`, [user])
    if (arrUser.rowCount === 0) {
        await connection.query(`INSERT INTO fighters (username, wins, losses, draws)
            VALUES ($1, 0, 0, 0)`, [user])
    }
}

export async function win (user: string){
    await connection.query(`UPDATE fighters SET wins=wins+1 WHERE username=$1`,[user])
}

export async function loss (user: string) {
    await connection.query(`UPDATE fighters SET losses=losses+1 WHERE username=$1`, [user])
}

export async function draw (user: string) {
    await connection.query(`UPDATE fighters SET draws=draws+1 WHERE username=$1`, [user])
}

export async function ranking () {
    return await connection.query(`SELECT username, wins, losses, draws
        FROM fighters ORDER BY wins DESC, draws DESC`)
}