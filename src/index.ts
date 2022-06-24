import {settings} from "./settings";
import express from 'express'
import cors from "cors";
import {Pool, Client} from 'pg'

const connectDB = async () => {
    const client = new Client({
        connectionString: settings.DB_URI,
        ssl: {
            rejectUnauthorized: false
        }
    });
    try {
        await client.connect()
        console.log('Successfully connect to DB')
    } catch (e) {
        console.log(`DB connection error:\n${e}`)
    }
}
const PORT = settings.PORT

const app = express()
app.use(cors())
app.use(express.json())


const startApp = async () => {
    await connectDB()
    app.listen(PORT, async () => {
        console.log(`Express app listening on port ${PORT}`)
    })

}

startApp()