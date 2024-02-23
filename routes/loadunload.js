const express = require('express');
const router = express.Router();
const loadunload = require("../controller/loadunload")

router.post('/load',loadunload.createLoadUnload);
router.get('/load',loadunload.getLoadUnload);
router.put('/load/:luid',loadunload.updateLoadUnloadById);
router.delete('/load/:luid',loadunload.deleteLoadUnloadById);

module.exports=router;