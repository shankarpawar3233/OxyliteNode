const express = require('express');
const router = express.Router();
const plant = require('../controller/plant');

// Route to create a new plant
router.post('/plants', plant.createPlant);
router.get('/plants', plant.getPlantDetails);
router.get('/plants/:pid',plant.getPlantById);
router.put('/plants/:pid', plant.updatePlantById);
router.delete('/plants/:pid',plant.deletePlantById);

module.exports = router;