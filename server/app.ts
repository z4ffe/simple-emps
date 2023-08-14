import cors from 'cors'
import 'dotenv/config'
import express from 'express'
import {DBDataSource} from './db'
import router from './routes/routes'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/', router)


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