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

const getOrdersById = async (req, res) => {
  const {deliveryId} = req.params; 
  console.log(deliveryId); 
  try {
    const result = await Delivery.findOne({ deliveryId: deliveryId }); 
    if (!result) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.status(200).json({ data: result });
  } catch (error) {
    console.error('Error occurred while getting the data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


const updateDeliveryById = async (req, res) => {
  const { deliveryId } = req.params; 
  const data  = req.body;
  try {
    const result = await Delivery.findOneAndUpdate({ delivery_Id:deliveryId} , data, {new: true }); 
    if (!result) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.status(200).json({ data: result });
  } catch (error) {
    console.error('Error occurred while updating the data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

const deleteDeliveryId = async (req, res) => {
  const { deliveryId } = req.params; 
  try {
    const result = await Delivery.findOneAndDelete({delivery_Id:deliveryId}); 
    if (!result) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.status(200).json({ msg: 'delivery Order deleted successfully' });
    
  } catch (error) {
    console.error('Error occurred while deleting the data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
    addDelivery,
    getAllOrders,
    getOrdersById,
    updateDeliveryById,
    deleteDeliveryId
}
