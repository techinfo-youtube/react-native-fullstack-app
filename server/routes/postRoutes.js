const express = require("express");
const { requireSingIn } = require("../controllers/userController");
const {
  createPostController,
  getAllPostsContoller,
} = require("../controllers/postController");

//router object
const router = express.Router();

// CREATE POST || POST
router.post("/create-post", requireSingIn, createPostController);

//GET ALL POSTs
router.get("/get-all-post", getAllPostsContoller);

//export
module.exports = router;
