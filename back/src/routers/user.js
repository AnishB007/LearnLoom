const express = require("express");
const app = express();
const router = new express.Router();
const User = require("../models/user");
// const auth = require("../middleware/auth");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());


// create user in database ==================================
router.post("/users", function (req, res) {
    console.log(req.body);
    const newuser = new User(req.body);

    newuser.save().then(function (result) {
        res.send(result);
    }).catch(function (err) {
        res.send(err);
    })
})

// read all users=====================================
router.get("/users", function (req, res) {
    User.find({}).then(function (result) {
        res.send(result);
    }).catch((err) => {
        res.send(err);
    })
})

module.exports = router;