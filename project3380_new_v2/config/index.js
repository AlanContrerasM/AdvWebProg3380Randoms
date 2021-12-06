require('dotenv').config();

module.exports = {
    DB: process.env.DB,
    SECRET: process.env.SECRET,
    PORT: process.env.PORT,
    WEATHER_KEY: process.env.WEATHER_KEY
}