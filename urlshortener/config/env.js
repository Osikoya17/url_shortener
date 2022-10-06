require("dotenv").config();
const {
    PORT,
    APP_NAME,
    MONGO_URI

} = process.env

module.exports = {
    PORT,
    APP_NAME,
    MONGO_URI
}