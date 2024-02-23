const loadunload = require("../models/loadunload");

const createLoadUnload = async (req, res) => {
  try {
    const newLoad = await loadunload.create(req.body);
    res.json({ responsse_code: 200, response_msg: "success", data: newLoad });
  } catch (error) {
    console.error("Error creating for load:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getLoadUnload = async (req, res) => {
  try {
    const result = await loadunload.find();
    res.json({ responsse_code: 200, response_msg: "success", data: result });
  } catch (error) {
    console.error("Error fetching for load:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateLoadUnloadById = async (req, res) => {
  try {
    const luid = req.params.luid;
    const {
      full_name,
      shift_timing,
      load_Qty,
      delivered_Qty,
      empty_received_Qty,
      filled_unload_Qty,
      empty_unload_Qty,
    } = req.body;

    const result = await loadunload.findOneAndUpdate(
      { loadunload_Id: luid },
      {
        full_name,
        shift_timing,
        load_Qty,
        delivered_Qty,
        empty_received_Qty,
        filled_unload_Qty,
        empty_unload_Qty,
      }
    );
    if (!result) {
      return res.status(404).json({ message: "data not found" });
    }
    res.json({
      response_code: 200,
      response_msg: "success",
      data: result,
    });
  } catch (error) {
    console.error("Error updating loadunload details:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const deleteLoadUnloadById = async (req, res) => {
  const luid = req.params.luid;
  try {
    const result = await loadunload.findOneAndDelete({ loadunload_Id: luid });
    if (!result) {
      return res.status(404).json({ message: "data not found" });
    }
    res.json({
      response_code: 200,
      response_msg: "success",
      data: result,
    });
  } catch (error) {
    console.error("Error deleting loadunload details:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  createLoadUnload,
  getLoadUnload,
  updateLoadUnloadById,
  deleteLoadUnloadById,
};
