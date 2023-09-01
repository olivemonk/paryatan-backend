const express = require("express");
const userController = require("../controllers/user");
const bcrypt = require("bcrypt");

const router = express.Router();
router
  .post("/register", userController.createUser)
  .post("/login", userController.loginUser);

exports.router = router;
