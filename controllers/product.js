const Product = require("../models/Product");
// const data = require("../data/products.json");
const axios = require("axios");

const { TIENDA_NUBE_URL } = process.env;

const dumpLoad = async (req, res) => {
  try {
    let { data } = await axios.get(`${TIENDA_NUBE_URL}/products?per_page=100`);
    const products = data.map((product) => {
      return {
        id: product.id,
        name: product.name.es,
        images: [...product.images.map((image) => image.src)],
        attributes: [...product.attributes.map((attribute) => attribute.es)],
        published: product.published,
        variants: [
          ...product.variants.map((variant) => {
            return {
              id: variant.id,
              price: variant.price,
              values: [...variant.values],
            };
          }),
        ],
      };
    });
    res.json(products);
    // Product.insertMany(products);
    // res.status(200).json({ message: "Products loaded" });
  } catch (e) {
    console.log(e);
  }
};

module.exports = { dumpLoad };
