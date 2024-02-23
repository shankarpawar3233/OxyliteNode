const router=require('express').Router();

const expencesController=require('../controller/expences');
const { route } = require('./payment');



router.post('/expences' , expencesController.addExpences);
router.get('/expences',expencesController.getAllExpences);
router.get('/expences/:Id',expencesController.getExpencesById);
router.put('/expences/:id',expencesController.updateExpences);
router.delete('/expences/:id',expencesController.deleteExpences);


module.exports=router;