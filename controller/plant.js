const Plant = require("../models/plant");

const createPlant = async (req, res) => {
  try {
  
    const plant = new Plant(req.body);
    console.log("data"+plant);
    await plant.save();
    res.json({ responsse_code: 200, response_msg: "success", data: plant });
  } catch (error) {
    console.error("error for creating the plant", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getPlantDetails = async (req, res) => {
  try {
    const plantDetails = await Plant.find().select({
      plant_Id: 1,
      plant_Name: 1,
      contact_Number: 1,
      plant_Address: 1,
      GST_No: 1,
      PAN_Card: 1,
      ShopAct_License: 1,
    });
    res.json({
      responsse_code: 200,
      response_msg: "success",
      data: plantDetails,
    });
  } catch (error) {
    console.error("error for getting the plant", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getPlantById = async (req, res) => {
  const pid = req.params.pid; // Extract plant ID from request parameters
  try {
    const plantDetails = await Plant.findOne({ plant_Id: pid }).select({
      plant_Id: 1,
      plant_Name: 1,
      contact_Number: 1,
      plant_Address: 1,
      GST_No: 1,
      PAN_Card: 1,
      ShopAct_License: 1,
    });

    if (!plantDetails) {
      return res.status(404).json({ message: "Plant not found" });
    }

    res.json({
      response_code: 200,
      response_msg: "success",
      data: plantDetails,
    });
  } catch (error) {
    console.error("Error fetching plant details:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

 

const updatePlantById = async (req, res) => {
  var pid = req.params.pid;
  try {
    const {
      plant_Name,
      contact_Number,
      plant_Address,
      GST_No,
      PAN_Card,
      ShopAct_License,
    } = req.body;

    // Update the plant document
    const updatedPlant = await Plant.findOneAndUpdate(
      { plant_Id: pid },
      {
        plant_Name,
        contact_Number,
        plant_Address,
        GST_No,
        PAN_Card,
        ShopAct_License,
      },
      { new: true }
    );

    res.json({
      response_code: 200,
      response_msg: "success",
      data: updatedPlant,
    });
  } catch (error) {
    console.error("Error updating plant:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};



const deletePlantById = async (req, res) => {
  const pid = req.params.pid;
  try {
    const deletedPlant = await Plant.findOneAndDelete({ plant_Id: pid });

    if (!deletedPlant) {
      return res.status(404).json({ message: "Plant not found" });
    }
  
    res
      .status(200)
      .json({ message: "Plant deleted successfully", deletedPlant });
  } catch (error) {
    console.error("error for deleting the plant", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  createPlant,
  getPlantDetails,
  getPlantById,
  updatePlantById,
  deletePlantById,
};
