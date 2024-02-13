const express = require('express');
const router = express.Router();
const orders = require('../controller/orders');

router.post('/orders',orders.createOrder);
router.get('/orders',orders.getOrder);
router.get('/orders/:oid',orders.getOrderById);
router.delete('/orders/:oid',orders.deleteOrderById);

module.exports= router;