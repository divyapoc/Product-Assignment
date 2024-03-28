const express = require("express");
const router = express.Router();
const {
  getAllProduct,
  CreateProduct,
} = require("../controllers/productController");

router.route("/create-product").post(CreateProduct)
router.route("/products").get(getAllProduct)

module.exports = router