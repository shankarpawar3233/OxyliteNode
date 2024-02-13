const customer=require('../models/customer');

const addCustomer=async(req,res)=>{
    try{
         const data=new customer({
            userId:req.body.userId,
            fullName:req.body.fullName,
            mobileNumber:req.body.mobileNumber,
            address:req.body.address,
            email:req.body.email,
            shiftTiming:req.body.shiftTiming,
            plantOwnerId:req.body.plantOwnerId,
            subscribeProduct:req.body.subscribeProduct,
            lattitude:req.body.lattitude,
            plantId:req.body.plantId,
            customerId:req.body.customerId,
            password:req.body.password
         })
         const result = await data.save();
         res.json({responsse_code:200,response_msg:"success",data:result});
        } catch (error) {
          console.error('Error creating for customer:', error);
          res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    const getAllCustomer=async(req,res)=>{

      try{
           const result=await customer.find();
           res.json({responsse_code:200,response_msg:"success",data:result});
          } catch (error) {
            console.error('Error for fetching customer:', error);
            res.status(500).json({ error: 'Internal Server Error' });
          }
    }

    const getCustomersById = async (req, res) => {
      const { customerId } = req.params;
      console.log(customerId)
      try {
        const response = await customer.findOne({customerId});
        if (!response) {
          return res.status(404).json({ response_msg: "Customer not found" });
        }
        res.status(200).json({ response_msg: "success", data: response });
      } catch (error) {
        console.error('Error fetching customer:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
    }
    
    const updateCustomer=async (req,res)=>{
      const {customerId}=req.params;
      const data=req.body;

      try{
       const result = await customer.updateOne(customerId,data);
       res.json({responsse_code:200,response_msg:" Data update successfully",data:result});
      } catch (error) {
        console.error('Error creating for customer:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }

    const deleteCustomer = async (req, res) => {
      const { customerId } = req.params;
      try {
        const result = await customer.findOneAndDelete(customerId); 
        if (!result) {
          return res.status(404).json({ msg: 'Customer not found' });
        }
        res.status(200).json({ msg: 'Customer deleted successfully' });
      } catch (error) {
        console.error('Error deleting customer:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
    }
    

    module.exports={
        addCustomer,
        getAllCustomer,
        getCustomersById,
        updateCustomer,
        deleteCustomer
    }