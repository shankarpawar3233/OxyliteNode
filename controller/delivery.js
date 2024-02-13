const Delivery = require('../models/delivery');

const addDelivery = async (req, res) => {
    try {
        const newDelivery = new Delivery(req.body);
        const savedDelivery = await newDelivery.save();
        res.status(201).json({ data: savedDelivery });
    } catch (error) {
        console.error('Error occurred during the addition of delivery:', error);
        if (error.name === 'ValidationError') {
            res.status(400).json({ error: 'Validation Error', message: error.message });
        } else {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

const getAllOrders=async(req,res)=>{
  try{
       const result=await Delivery.find()
       res.status(200).json({data:result})
  }catch(error){
    console.error('error occuring for getting the data',error)
    res.json('Internal server error')
  }
}
module.exports = {
    addDelivery,
    getAllOrders
}
