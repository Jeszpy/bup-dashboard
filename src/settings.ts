require('dotenv').config()

export const settings = {
    PORT : process.env.PORT,
    DB_HOST : process.env.DB_HOST,
    DB_NAME : process.env.DB_NAME,
    DB_USER : process.env.DB_USER,
    DB_PASSWORD : process.env.DB_PASSWORD,
    DB_PORT : Number(process.env.DB_PORT) || 5432,
    DB_URI : process.env.DB_URI,
}

