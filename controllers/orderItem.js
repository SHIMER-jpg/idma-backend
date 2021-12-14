const Orderitem = require("../models/orderItem");

const axios = require("axios");

const { TIENDA_NUBE_URL } = process.env;

const dumpLoadOrders = async (req, res) => {
  try {
    const { data } = await axios.get(
      `${TIENDA_NUBE_URL}/orders?page=1&per_page=200`
    );
    const orders = [];
    data.forEach((order) => {
      order.products.forEach((product) => {
        orders.push({
          orderId: order.id,
          number: order.number,
          productId: product.product_id,
          productName: product.name,
          payment: order.payment_status,
          clientId: order.customer.id,
          clientName: order.customer.name,
          note: order.note,
          storeStatus: order.status,
          nextAction: order.next_action,
        });
      });
    });
    Orderitem.insertMany(orders);
    res.json(orders);
  } catch (err) {
    console.log(err);
  }
};

const createOrderItem = async (req, res) => {
  // try {
  //   const orderItem = await Orderitem.create(req.body);
  //   res.json(orderItem);
  // } catch (err) {
  //   console.log(err);
  // }
};

const getOrders = async (req, res) => {
  try {
    const orderItem = await Orderitem.aggregate([
      // { $match: { number: 300 } },
      {
        $lookup: {
          from: "products",
          let: { id: "$productId" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$id", "$$id"],
                },
              },
            },
            {
              $project: {
                _id: 0,
                images: 1,
              },
            },
          ],
          as: "product",
        },
      },
      { $unwind: "$product" },
    ]);
    res.json(orderItem);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  dumpLoadOrders,
  createOrderItem,
  getOrders,
};

/**
      {
        $lookup: {
          from: "products",
          localField: "productId",
          foreignField: "id",
          as: "product",
        },
      },
      { $unwind: "$product" },
 */
