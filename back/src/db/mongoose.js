require('dotenv').config()
const mongoose = require('mongoose')
const password = process.env.PASSWORD

// const URI = `mongodb+srv://rajdeepmallick010:${password}@cluster0.janhrcc.mongodb.net/social?retryWrites=true&w=majority&appName=Cluster0/`
const URI=`mongodb+srv://anishneel02:${password}@cluster0.dy8pms6.mongodb.net/`;

const connectDB = async () => {
    try {
        await mongoose.connect(URI)
        console.log('Connection to Database Successful')
    } catch (error) {
        console.log('DB connection failed ' + error)
    }
}

module.exports = connectDB
// mongoose.connect("mongodb://localhost:27017/learnloom-api", {useNewUrlParser:true, useUnifiedTopology:true, autoIndex:true});
