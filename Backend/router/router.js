const express = require("express");
const router = express.Router();

const { signup, getUsers, login } = require("../controllers/userController");



router.post("/signup", signup);
router.post("/login", login);

router.get("/", getUsers);

module.exports = router;