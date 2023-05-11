const express = require("express");
const router = express.Router();
const { getAllUsers, getOneUser } = require("../controller/user.controller");

router.route("/").get(getAllUsers);
router.route("/:id").get(getOneUser);

module.exports = router;
