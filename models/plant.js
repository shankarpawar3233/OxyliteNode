const mongoose = require('mongoose');
const { Schema } = mongoose;

const PlantSchema = new Schema({
    plantId: { type: String,  required: true ,  unique: true, default: generatePlantId },
    plantName: { type: String, required: true },
    contactNumber: { type: Number,  required: true },
    plantAddress: { type: String,  required: true },
    GST_No: { type: String,  required: true },
    PAN_Card: { type: String,  required: true },
    ShopAct_License: { type: String,  required: true }
}, { timestamps: true });

function  generatePlantId() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

const Plant = mongoose.model("plantData", PlantSchema, "plant");

module.exports = Plant;
