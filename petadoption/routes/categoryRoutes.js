const express = require("express");
const categoryController = require("../controllers/categoryController");
const category = require("../models/category");

const router = express.Router();

//get all media
router.get("/all", categoryController.getAll);

//create new category
router.post('/create', categoryController.create);

//update a category
router.put('/update/:id', categoryController.update);

//delete a category
router.delete('/delete/:id', categoryController.delete);

module.exports = router;