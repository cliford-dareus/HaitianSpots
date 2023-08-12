const express = require("express");
const router = express.Router();
const { postComment, getComment } = require("../controller/comment.controller");
const authentication = require("../middleware/authentication");

router.route("/").post(authentication, postComment);
router.route("/:id").get(authentication, getComment);

module.exports = router;
