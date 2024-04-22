const express = require("express");
const app = express();
const materiaRouter = express.Router();

const requireLogin = require("../middlewares/requireLogin");


materiaRouter.get("/semester-one", requireLogin, (_req, res) => {
    res.status(200).json({
        msg: "Hello from sem 1!"
    })
})

materiaRouter.post("/semester-one", requireLogin, (_req, res) => {

    // do the db calls and get the materials
    res.status(200).json({
        msg: "Hello from sem 1! Here are the materials...."
    })
})

module.exports = materiaRouter;