const express = require("express");
const router = express.Router();
const userController = require("./../controllers/userController");

/* GET home page. */
router.get("/", userController.getAllUsers);
router.patch('/:id', userController.updateUser);
router.post("/create", userController.createUser);

module.exports = router;
