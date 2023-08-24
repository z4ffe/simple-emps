import cookieParser from 'cookie-parser'
import cors from 'cors'
import 'dotenv/config'
import express from 'express'
import expressWinston from 'express-winston'
import {DBDataSource} from './config/db'
import {logger} from './config/logger'
import {handleError} from './middleware/apiError'
import router from './routes/routes'

const app = express()

app.use(cors({origin: 'http://localhost:5173', credentials: true}))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cookieParser())
app.use('/', router)
app.use(expressWinston.logger({winstonInstance: logger, statusLevels: true}))
app.use(handleError)

//

const PORT = process.env.PORT

const launchServer = async (): Promise<void> => {
	try {
		await DBDataSource.initialize()
		console.log('Database successfully initialized')
		app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`))
	} catch (error) {
		console.error('Error message: ', error)
	}
}

launchServer()