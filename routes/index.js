const router = require("express").Router();
const productsRoute = require("./products-route");

router.use("/products", productsRoute);

module.exports = router;
