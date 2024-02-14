const Payment = require('../models/payment'); 

const addPayment = async (req, res) => {
    try {
        const data = new Payment(req.body); 
        const result = await data.save(); 
        res.status(200).json({ data: result }); 
    } catch (error) {
        console.error('Error occurred during add payment:', error);
        res.status(500).json('Internal server error'); 
    }
}

const getAllPayments=async(req,res)=>{
    try{
        const response=await Payment.find();
        res.status(200).json({data:response});
    }catch (error) {
        console.error('Error occurred during the getting payment:', error);
        res.status(500).json('Internal server error'); 
    }
}
const getPaymentById = async (req, res) => {
    const { paymentId } = req.params;
    try {
        const result = await Payment.findOne({ paymentId: paymentId }).select({ _id: 0, paymentId: 0 });
        if (!result) {
            return res.status(404).json('Data not found'); 
        }
        res.status(200).json({ data: result });
    } catch (error) {
        console.error('Error occurred during getting payment:', error);
        res.status(500).json('Internal server error');
    }
}

const deletePayment=async(req,res)=>{
    const {paymentId}=req.params;
    try{
        const result=await Payment.findOneAndDelete({paymentId:paymentId})
        if (!result) {
            return res.status(404).json('Data not found'); 
        }
        res.status(200).json({ Message:'payment delete successfully'});
    } catch (error) {
        console.error('Error occurred during delete payment:', error);
        res.status(500).json('Internal server error');
    }
}
module.exports = {
    addPayment,
    getAllPayments,
    getPaymentById,
    deletePayment
};
