const express = require("express");
const app = express();
const userRouter = express.Router();
const User = require("../models/user");
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken");
// const auth = require("../middleware/auth");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

const { SECRET_KEY } = process.env

console.log(SECRET_KEY);
// create user in database ==================================
userRouter.post("/signup", async function (req, res) {
    console.log(req.body);

    const { name, email, pass } = req.body
    if (!name || !email || !pass) {
        return res.status(422).json({ error: 'Please add all the fields...' })
    }

    try {
        const savedUser = await User.findOne({
            $or: [{ email }],
        })
        if (savedUser) {
            return res
                .status(422)
                .json({ error: 'A user already exist with the email' })
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(pass, salt)
        const user = new User({
            name,
            email,
            password: hashedPassword,
        })
        await user.save()
        res.status(200).json({ success: true })
    } catch (err) {
        console.log(err)
        res.status(400).json({ success: false })
    }
})




// return jwt token to user for login ==================================
userRouter.post("/login", async function (req, res) {
    console.log(req.body);

    const { email, pass } = req.body
    if (!email || !pass) {
        return res.status(422).json({ error: 'Please add all the fields...' })
    }

    try {
        const userData = await User.findOne({ email })
        // console.log(SECRET_KEY);
        if (userData) {
            const hashedPassword = userData.password
            console.log("DB pass : ", hashedPassword);
            console.log("from postman: ", pass);
            const isMatch = await bcrypt.compare(pass, hashedPassword)
            console.log(isMatch);
            if (isMatch) {
                const jwtToken = jwt.sign({ _id: userData.id }, SECRET_KEY)
                return res.status(200).json({
                    success: true,
                    token: jwtToken,
                    user: userData,
                })
            }
            return res.status(422).json({
                error: 'Your entered password is not matched, please try again...',
            })
        }
        return res
            .status(422)
            .json({ error: 'No user exists with this email...' })
    } catch (err) {
        console.log(err)
        res.status(400).json({ success: false })
    }
})

// read all users=====================================
userRouter.get("/users", function (req, res) {
    User.find({}).then(function (result) {
        res.send(result);
    }).catch((err) => {
        res.send(err);
    })
})

module.exports = userRouter;