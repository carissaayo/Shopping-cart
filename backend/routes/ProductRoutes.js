const express = require('express');
const router = express.Router();
const { getSingleProduct, getAllProducts } = require("../controller/products");


// GET all Products
router.get("/", getAllProducts);

// GET a single Product by Id
router.get("/:id",getSingleProduct);

module.exports = router;