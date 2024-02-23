const router=require('express').Router();

const customerController=require('../controller/customer');


router.post('/addcustomer',customerController.upload.single('profileImg'), customerController.addCustomer);
router.get('/getCustomers',customerController.getAllCustomer);
router.get('/getcustomer/:customerId',customerController.getCustomersById);
router.put('/updateCustomer/:customerId',customerController.updateCustomer)
router.delete('/deleteCustomer/:customerId',customerController.deleteCustomer);


module.exports=router;