const express = require('express');
const router = express.Router();
const {
  getAllOrders,
  getUserOrders,
  getOrder,
  createOrder,
  updateOrderStatus,
  markOrderPaid,
  cancelOrder
} = require('../controllers/orderController');

router.route('/')
  .get(getAllOrders)
  .post(createOrder);

router.route('/user/:userId')
  .get(getUserOrders);

router.route('/:id')
  .get(getOrder);

router.route('/:id/status')
  .put(updateOrderStatus);

router.route('/:id/pay')
  .put(markOrderPaid);

router.route('/:id/cancel')
  .put(cancelOrder);

module.exports = router;