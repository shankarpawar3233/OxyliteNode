const express = require('express');
const router = express.Router();
const MonthlyCard = require('../controller/monthlycard');

router.post('/card',MonthlyCard.addEntery);
router.get('/card',MonthlyCard.getEntry);
router.get('/card/:cid',MonthlyCard.getEntryById);
router.put('/card/:cid',MonthlyCard.updateEntryById);
router.delete('/card/:cid',MonthlyCard.deleteEntery);


module.exports=router;
