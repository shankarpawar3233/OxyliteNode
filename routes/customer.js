const router=require('express').Router();

const customerController=require('../controller/customer');


router.post('/addcustomer',customerController.addCustomer);
router.get('/getCustomers',customerController.getAllCustomer);
router.get('/getcustomer/:customerId',customerController.getCustomersById);
router.delete('/deleteCustomer/:customerId',customerController.deleteCustomer);

module.exports=router;