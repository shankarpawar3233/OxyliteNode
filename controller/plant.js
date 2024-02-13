const Plant = require("../models/plant");

const createPlant = async (req, res) => {
  try {
    const plant = new Plant(req.body);
    await plant.save();
    res.json({ responsse_code: 200, response_msg: "success", data: plant });
  } catch (error) {
    console.error("error for getting the customer", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getPlantDetails = async (req, res) => {
  try {
    const plantDetails = await Plant.find().select({
      plantId: 1,
      plantName: 1,
      contactNumber: 1,
      plantAddress: 1,
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
    console.error("error for getting the customer", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const updatePlantById = async (req, res) => {
  const pid = req.params.pid;
  try {
    const {
      plantName,
      contactNumber,
      plantAddress,
      GST_No,
      PAN_Card,
      ShopAct_License,
    } = req.body;
    const updatedPlant = await Plant.findOneAndUpdate(
      { plantId: pid }, // Filter based on plantId
      {
        plantName,
        contactNumber,
        plantAddress,
        GST_No,
        PAN_Card,
        ShopAct_License,
      }, // Update object
      { new: true } // Return the updated document
    );

    if (!updatedPlant) {
      return res.status(404).json({ message: "Plant not found" });
    }
    res.json({
      responsse_code: 200,
      response_msg: "success",
      data: updatedPlant,
    });

    // res.status(200).json(updatedPlant);
  } catch (error) {
    console.error("error for getting the customer", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const deletePlantById = async (req, res) => {
  const pid = req.params.pid;
  try {
    const deletedPlant = await Plant.findOneAndDelete({ plantId: pid });

    if (!deletedPlant) {
      return res.status(404).json({ message: "Plant not found" });
    }
    // res.status(200).json({response_msg:"success",data:deletedPlant});
    // res.json({responsse_code:200,response_msg:"success",data:deletedPlant});

    res
      .status(200)
      .json({ message: "Plant deleted successfully", deletedPlant });
  } catch (error) {
    console.error("error for getting the customer", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  createPlant,
  getPlantDetails,
  updatePlantById,
  deletePlantById,
};
