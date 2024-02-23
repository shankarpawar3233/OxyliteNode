const router=require('express').Router();
const paymentController=require('../controller/payment')

router.post('/addPayment',paymentController.addPayment);
router.get('/getAllPayments',paymentController.getAllPayments);
router.get('/getPaymentById/:paymentId',paymentController.getPaymentById);
router.delete('/deletePaymentById/:paymentId',paymentController.deletePayment);


module.exports=router;