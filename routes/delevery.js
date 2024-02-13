const router=require('express').Router();
const deleveryController=require('../controller/delivery')


router.post('/addDelevery',deleveryController.addDelivery);


module.exports=router;