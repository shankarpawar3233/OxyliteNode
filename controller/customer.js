const customer=require('../models/customer');
const multer=require('multer')

const storage = multer.diskStorage({
  destination: './Public/profileImg',
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-'+ file.originalname)
  },
}); 

const upload = multer({ storage: storage });  

const addCustomer = async (req, res) => {
  try {
    let url = "http://localhost:2000/profileImg/" + req.file.originalname;
    const data = new customer({ ...req.body, profileImg: url }); 
    console.log(data);
    const result = await data.save();
    res.json({ response_code: 200, response_msg: "success", data: result });
  } catch (error) {
    console.error('Error creating for customer:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}


    const getAllCustomer=async(req,res)=>{

      try{
        const Users = await customer.aggregate([
          {
              $lookup: {
                  from: "signUp",
                  pipeline: [
                      { $project: {_id:0,userId: 1,name:1}}
                  ],
                  as: "signUpData"
              }
          }
      ])
          res.json({signup:Users})
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
        const response = await customer.findOne({customer_Id:customerId});
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
      const profileImg = req.file ? req.file.path : null;
      const data=req.body;
      try{
       const result = await customer.findOneAndUpdate({customerId:customerId},data,{new:true});
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
        upload,
        getAllCustomer,
        getCustomersById,
        updateCustomer,
        deleteCustomer
    }