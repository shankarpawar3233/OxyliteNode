const router=require('express').Router();
const deleveryController=require('../controller/delivery')


router.post('/delevery',deleveryController.addDelivery);
router.get('/deleveries', deleveryController.getAllOrders);
router.get('/delevery/:deliveryId',deleveryController.getOrdersById)
router.put('/delevery/:deliveryId',deleveryController.updateDeliveryById)
router.delete('/deleteDelivery/:deliveryId',deleveryController.deleteDeliveryId)


module.exports=router;