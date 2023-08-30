const express = require("express");
const {
  registerController,
  loginController,
  updateUserController,
} = require("../controllers/userController");

//riouter object
const router = express.Router();

//routes
// REGISTER || POST
router.post("/register", registerController);

// LOGIN || POST
router.post("/login", loginController);

//UPDATE || PUT
router.put("/update-user", updateUserController);

//export
module.exports = router;
