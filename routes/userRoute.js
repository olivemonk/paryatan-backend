const express = require("express");
const userController = require("../controllers/user");

const router = express.Router();
router
  .post("/register", userController.createUser)
  .post("/login", userController.loginUser)
  .get("/all", userController.allUsers);

exports.router = router;
