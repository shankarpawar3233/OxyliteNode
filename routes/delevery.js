const router=require('express').Router();
const deleveryController=require('../controller/delivery')


router.post('/addDelevery',deleveryController.addDelivery);
router.get('/getAllOrders', deleveryController.getAllOrders);
router.get('/getOrderById/:deliveryId',deleveryController.getOrdersById)
router.put('/updateDelevery/:deliveryId',deleveryController.updateDeliveryById)
router.delete('/deleteDelivery/:deliveryId',deleveryController.deleteDeliveryId)


module.exports=router;