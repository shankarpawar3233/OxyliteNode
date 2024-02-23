const Product = require("../models/product");

const createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    console.log(newProduct)
    res.json({
      responsse_code: 200,
      response_msg: "success",
      data: newProduct,
    });
  } catch (error) {
    console.error("Error for creating product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getProduct = async (req, res) => {
  try {
    const result = await Product.aggregate([
      {
        $lookup: {
          from: "plant",
          localField: "plant_Id",
          foreignField: "plant_Id",
          as: "plant_details"
        }
      },
      {
        $project: {
          product_Id: 1,
          plant_Id: 1,
          product_Name: 1,
          product_Brand_Name: 1,
          product_Size_Ltr: 1,
          product_Unit_Price: 1,
          product_Qty: 1,
          "plant_details.plant_Name": 1,
          "plant_details.plant_Address":1,
          "plant_details.contact_Number":1,
          _id: 0
        }
      }
    ]);

    res.json({ responsse_code: 200, response_msg: "success", data: result });
  } catch (error) {
    console.error("Error for fetching product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


// const getProductById = async (req, res) => {
//   try {
//     let prodid = req.params.prodid;

//     const result = await Product.findOne({ product_Id: prodid }).select({
//       product_Id: 1,
//       plant_Id: 1,
//       product_Name: 1,
//       product_Brand_Name: 1,
//       product_Size_Ltr: 1,
//       product_Unit_Price: 1,
//       product_Qty: 1,
//       _id: 0,
//     });

//     if (!result) {
//       return res.status(404).json({ message: "Product not found" });
//     }

//     res.json({ responsse_code: 200, response_msg: "success", data: result });
//   } catch (error) {
//     console.error("error for getting the product", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// };

const getProductById = async (req, res) => {
  try {
    let prodid = req.params.prodid;

    const result = await Product.aggregate([
      {
        $match: {
          product_Id: prodid
        }
      },
      {
        $lookup: {
          from: "plant",
          localField: "plant_Id",
          foreignField: "plant_Id",
          as: "plant_details"
        }
      },
      {
        $project: {
          product_Id: 1,
          plant_Id: 1,
          product_Name: 1,
          product_Brand_Name: 1,
          product_Size_Ltr: 1,
          product_Unit_Price: 1,
          product_Qty: 1,
          plant_details: {
            $arrayElemAt: ["$plant_details", 0]
          },
          _id: 0,
        }
      }
    ]);

    if (result.length === 0) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({ responsse_code: 200, response_msg: "success", data: result[0] });
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateProductById = async (req, res) => {
  var prodid  = req.params.prodid;
  try {
    const {product_Name, product_Brand_Name, product_Size_Ltr, product_Unit_Price, product_Qty} = req.body;
    const updatedProduct = await Product.findOneAndUpdate(
      { product_Id: prodid},
      { product_Name,product_Brand_Name,product_Size_Ltr,product_Unit_Price,product_Qty},
      { new: true } // Return the updated document
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({responsse_code: 200, response_msg: "success", data: updatedProduct });
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const deleteProductById = async (req, res) => {
  let { prodid } = req.params;
  try {
    const result = await Product.findOneAndDelete({ product_Id: prodid });

    if (!result) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json({ responsse_code: 200,response_msg: "success", data: result });
  } catch (error) {
    console.error("error for deleting the product", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  createProduct,
  getProduct,
  getProductById,
  updateProductById,
  deleteProductById,
};
