import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import 'express-async-errors'

import router from './routes/index.js'
import handleErrorMiddleware from './middlewares/handleErrorMiddleware.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(router)
app.use(handleErrorMiddleware)

app.listen(process.env.PORT, () => { console.log('runnig on ', process.env.PORT)})