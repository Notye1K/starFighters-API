import { Router } from "express"
import * as controllers from "../controllers/index.js"
import validateSchema from "../middlewares/validaSchemaMiddleware.js"
import battleSchema from "../schemas/battleSchema.js"

const router = Router()

router.get('/ranking', controllers.ranking)
router.post('/battle', validateSchema(battleSchema), controllers.battle )

export default router
