const express = require("express");
const app = express();
const router = express.Router()

const {signupController,
signinController,
profileController} = require("../controller/userController")

const {userAuth} = require("../middlewares/userAuth")

router.post("/signup",signupController)
router.post("/signin",signinController)
router.get("/myprofile",userAuth,profileController) //Authenticating From JWT


module.exports = {
    router
}