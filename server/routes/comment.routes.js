const express = require("express");
const router = express.Router();
const { postComment } = require("../controller/comment.controller");
const authentication = require("../middleware/authentication");

router.route("/").post(authentication, postComment);

module.exports = router;
