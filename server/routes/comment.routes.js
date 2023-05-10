const express = require("express");
const router = express.Router();
const { postComment } = require("../controller/comment.controller");

router.route("/").post(postComment);

module.exports = router;
