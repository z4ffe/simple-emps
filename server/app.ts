import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import router from './routes/routes'
import {DBDataSource} from './db'
const app = express()

app.use(cors())
app.use(express.json())
app.use('/', router)


const PORT = process.env.PORT

DBDataSource.initialize()
app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`))