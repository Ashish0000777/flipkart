const Product_model = require("../models/ProductsSchema")

module.exports.getProducts = async (request, responce) => {
  try {
    const result = await Product_model.find({});
    responce.status(200).json(result);
  } catch (error) {
    responce
      .status(500)
      .json("server error while fetching products", error.message);
  }
};


module.exports.getProductById = async (request, responce) => {
  try {
    let id = request.params.id;
    const result = await Product_model.findOne({ id: id });

    responce.status(200).json(result)
  } catch (error) {
    responce.status(500).json(error.message)
  }
};






