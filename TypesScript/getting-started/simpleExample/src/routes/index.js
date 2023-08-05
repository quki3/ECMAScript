const router = require('express').Router()
const landing = require("./landing.js")

router.use("/landing",landing)

module.exports = router;
