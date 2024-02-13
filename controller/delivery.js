const delivery=require('../models/delivery');

const addDelivery= async (req,res)=>{
   try{
    const data = new delivery(req.body)
    console.log(data);
     const response= await data.save();
     res.status(200).json({data:response});
   }catch(error){
    console.error('Error occuring during th add delevery',error);
    res.json('Internal server error');
   }
}


module.exports={
    addDelivery
}