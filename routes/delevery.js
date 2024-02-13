const router=require('express').Router();
const deleveryController=require('../controller/delivery')


router.post('/addDelevery',deleveryController.addDelivery);
router.get('/getAllOrders', deleveryController.getAllOrders);


module.exports=router;