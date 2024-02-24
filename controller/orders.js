const orders = require("../models/orders");


const createOrder = async (req, res) => {
  
  try {
    const newOrder = await orders.create(req.body);
    res.json({ responsse_code: 200, response_msg: "success", data: newOrder });
  } catch (error) {
    console.error("Error creating for orders:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

const getOrderDetails = async (req, res) => {
  try {
    const resultCursor = await orders.aggregate([
      {
        $lookup: {
          from: "product",
          localField: "product_Id",
          foreignField: "product_Id",
          as: "product_result"
        }
      }
    ]);

    let result = [];
    await resultCursor.forEach(doc => {
      result.push(doc);
    });

    res.json({ responsse_code: 200, response_msg: "success", data: result });
  } catch (error) {
    console.error("Error fetching for customer:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


  

const getOrderById = async (req, res) => {
  try {
    let oid = req.params.oid;
    const resultCursor = await orders.aggregate([
      {
        $match: {
          order_Id: oid
        }
      },
      {
        $lookup: {
          from: "product",
          localField: "product_Id",
          foreignField: "product_Id",
          as: "product_result"
        }
      }
    ]);
  
    let result = [];
    await resultCursor.forEach(doc => {
      result.push(doc);
    });
  
    if (result.length === 0) {
      return res.status(404).json({ message: "Order not found" });
    }
  
    res.json({ responsse_code: 200, response_msg: "success", data: result[0] });
  
  } catch (error) {
    console.log("error for getting the order", error);
    res.status(500).json({ error: "Internal server error" });
  }
  
};  


//   try{
//     let oid = req.params.oid;
//     const result = await orders.findOne({order_Id: oid});
//     if(!result){
//       return res.status(404).json({message:"Order not found"});
//     }
//     res.json({ responsse_code: 200, response_msg: "success", data: result });

//   }catch(error){
//     console.log("error for getting the order",error);
//     res.status(500).json({ error: "Internal server error" });
//   }
//  };

const deleteOrderById = async (req, res) => {
  let { oid } = req.params;
  try {
    const deleteOrder = await orders.findOneAndDelete({ order_Id: oid });
    if (!deleteOrder) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.json({
      responsse_code: 200,
      response_msg: "success",
      data: deleteOrder,
    });
  } catch (error) {
    console.log("error for deleting the order", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  createOrder,
  getOrderDetails,
  getOrderById,
  deleteOrderById,
};
