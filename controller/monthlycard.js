const MonthlyCard = require("../models/monthlycard");

const addEntery = async(req,res)=>{

    try{
         const entery = await MonthlyCard.create(req.body);
         res.json({ responsse_code: 200, response_msg: "success", data: entery });
    }catch(error){
        console.error("Error creating for Entery:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

const getEntry = async(req,res)=>{
    try{
        const result = await MonthlyCard.find();
        res.json({responsse_code:200,response_msg:"success",data:result});
    }catch(error){
        console.error("Error creating for Entery:", error);
        res.status(500).json({error:"Internal Server Error"});
    }
}

const getEntryById = async(req,res)=>{
    const cid = req.params.cid;
    try{
        const result = await MonthlyCard.findOne({monthlycard_Id:cid});
       
    if (!result) {
        return res.status(404).json({ message: "Details not found" });
      }
      res.json({responsse_code:200,response_msg:"success",data:result});

    }catch(error){
        console.error("Error fetching for Entery:", error);
        res.status(500).json({error:"Internal Server Error"});
    }
}

const updateEntryById = async(req,res)=>{
    const cid = req.params.cid;
    try{
        const { deliverd_Jar, recived_Jar}= req.body;
        const updateEntery = await MonthlyCard.findOneAndUpdate({monthlycard_Id:cid},{deliverd_Jar, recived_Jar},{ new: true } );
        if(!updateEntery){
            return res.status(400).json({message:"Details not Found"});
        }
        res.json({responsse_code:200, response_msg:"success",data:updateEntery});
    }catch(error){
        console.error("Error Updating for Entery:", error);
        res.status(500).json({error:"Internal Server Error"});
    }

}

const deleteEntery = async(req,res)=>{
    const cid = req.params.cid;
    try{
        const deleteResult = await MonthlyCard.findOneAndDelete({monthlycard_Id:cid});
        if(!deleteResult){
            return res.status(400).json({message:"Details not Found"});
        }
        res.json({responsse_code:200,response_msg:"success",data:deleteResult});
    }catch(error){
        console.error("Error Deleting for Entery:", error);
        res.status(500).json({error:"Internal Server Error"});
    }
}

module.exports={
    addEntery,getEntry,getEntryById,updateEntryById,deleteEntery
}