const db = require("../models");
const Product = db.products;

// Create and Save a new Tutorial
exports.getProducts = async (req, res) => {
  try {
    console.log("request received");
    const data = await Product.findAll();
    return res.status(200).json({
      products: data,
    });
  } catch (error) {
    console.log("error", error.message);
    res.status(400).json({
      error: error,
    });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const reqBody = req.body;
    console.log("request body ====>", reqBody);
    const product = {
      title: reqBody.title,
      price: Number(reqBody.price),
      description: reqBody.description,
      category: reqBody.category,
      image: reqBody.image,
    };

    const data = await Product.create(product);

    res.status(200).json(data);
  } catch (error) {
    console.log("error", error.message);
    res.status(400).json({
      error: error,
    });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const id = Number(req.params.id);

    const product = req.body;

    console.log("product update ====>", product, id);

    if (id && product) {
      const data = await Product.update(product, {
        where: { id: id },
      });

      console.log("updated data ====>", data);

      res.status(200).json({
        ...product,
        id: id,
      });
    }
  } catch (error) {
    console.log("error", error.message);
    res.status(400).json({
      error: error,
    });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const id = Number(req.params.id);

    if (id) {
      const dbRes = await Product.destroy({
        where: { id: id },
      });

      console.log("dbRes  =====>", dbRes);

      if (dbRes) {
        res.status(200).json({
          success: true,
        });
      } else {
        res.status(200).json({
          success: false,
        });
      }
    }
  } catch (error) {
    console.log("error", error.message);
    res.status(400).json({
      error: error,
    });
  }
};
