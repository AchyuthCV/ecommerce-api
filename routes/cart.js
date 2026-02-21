const express = require('express');
const router = express.Router();
const {
  getUserCart,
  addItemToCart,
  updateCartItem,
  removeCartItem,
  clearCart
} = require('../controllers/cartController');

router.route('/:userId')
  .get(getUserCart)
  .delete(clearCart);

router.route('/:userId/items')
  .post(addItemToCart);

router.route('/:userId/items/:itemId')
  .put(updateCartItem)
  .delete(removeCartItem);

module.exports = router;