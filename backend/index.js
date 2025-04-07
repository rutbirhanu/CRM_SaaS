const express= require("express")
const connectDB = require("./Config/dbConfig")
const app = express()


connectDB()
app.listen(8080, () => {
    console.log("server started")
})