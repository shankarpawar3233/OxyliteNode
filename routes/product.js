const express = require('express');
const router = express.Router();
const  product = require('../controllers/product');

router.post('/products', product.createProduct);
router.get('/products', product.getProduct);
router.get('/products/:prodid', product.getProductById);
router.put('/products/:prodid',product.updateProductById);
router.delete('/products/:prodid', product.deleteProductById);



module.exports=router;
