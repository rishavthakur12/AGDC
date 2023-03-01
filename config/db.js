const mongoose = require('mongoose')
const dbConfig = require('./dbconfig')
connectionUrl = "mongodb://localhost:27017/major_project"

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(connectionUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    }
    catch (err) {
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDB