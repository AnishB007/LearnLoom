const express = require("express");
const app = express();

require("./src/db/mongoose");
require(`dotenv`).config();
const bodyParser = require("body-parser");
const userRouter = require("./src/routers/user");
const connectDB = require('./src/db/mongoose')

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.json());

app.get("/hello", (req, res)=>{
    res.send("Hello, this is Anish!");
})
app.post("/hello", (req, res)=>{
    console.log(req.body);
    res.send("Hello, this is Anish!");
})



app.use(userRouter);

const port = 5000;
connectDB().then(() => {
    app.listen(port, () => {
        console.log('server is up & running on port ' + port)
    })
})
// app.listen(port, ()=>{
//     console.log("Server is listening on port: ", port);
// })