const express = require("express");
const router = express.Router();

const {
  signup,
  getUsers,
} = require("../controllers/userController");

router.post("/signup",signup);
router.get("/", getUsers);

module.exports = router;