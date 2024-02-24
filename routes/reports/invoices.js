const router=require('express').Router();
const invoiceController=require('../../controller/reports/invoice');


router.get('/customerList',invoiceController.getAllcustList);

module.exports=router;