const router = require('express').Router();
const products = require("../controllers/productController.js");
const {userAuthorization} = require('../utils/Authorization');


// Retrieve all events
router.get("/", products.findAll);

// Retrieve one Product with id
router.get("/:id", products.findOne);

// Delete all Products, just for testing... the automatic creation function
router.delete("/", products.deleteAll);

// Update a Product with id, not enabled, products created by admin.
router.put("/:id", );

// Create a new Product, disabled, this is not part of project scope
router.post("/", products.create);

module.exports = router;