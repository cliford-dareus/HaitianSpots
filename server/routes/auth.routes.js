const express = require("express");
const router = express.Router();
const {
  login,
  logout,
  registerUser,
} = require("../controller/auth.controller");

router.route("/register").post(registerUser);
router.route("/login").post(login);
router.route("/logout").post(logout);

module.exports = router;
