const express = require("express");
const {registerUser, authUser} = require("../controllers/userControllers")

const router = express.Router()

//2 ways
// router.get()
//chain multiple request

router.route("/").post(registerUser)
router.post("/login", authUser)

module.exports = router;