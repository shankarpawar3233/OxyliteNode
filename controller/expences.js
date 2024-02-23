const  Expences=require('../models/expences');

async function generateExpencesId() {
    const highestExpences = await Expences.findOne({}, {}, { sort: { 'expences_Id': -1 } });
    const highestExpencesId = highestExpences ? highestExpences.expences_Id : 0;
    return highestExpencesId + 1; 
}

const addExpences=async (req,res)=>{
    try{
        const expences_Id = await generateExpencesId();
        console.log(expences_Id);
        req.body.expences_Id = expences_Id;
        const obj= new Expences(req.body);
        const response= await obj.save();
        res.status(200).json({response_msg:"success",data:response }); 
    } catch (error) {
      console.error('Error adding expences:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
}

const getAllExpences=async(req,res)=>{
     try{
        const response=await Expences.find().select('expences_Id paymentMode category amount date message');
        res.status(201).json({data:response});
     }catch (error) {
        console.error('Error getting expences:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}
const getExpencesById = async (req, res) => {
    const {id} = req.params;
    console.log(id);
    try {
        const result = await Expences.findOne(id);
        console.log({ data: result });
        if (!result) {
            return res.status(404).json('Data not found'); 
        }
        res.status(200).json({ msg: 'success', data: result });
    } catch (error) {
        console.error('Error occurring during expenses:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
const updateExpences=async(req,res)=>{
    const {id} = req.params;
    const obj = req.body;
    try{
        const response = await Expences.findOneAndUpdate({expences_Id:id},obj,{new:true});
        if(!response){
            return res.status(404).json('Data is not update')
        }
       res.status(201).json({msg:'success',data:response})
    }catch(error){
        console.error('error occuring during the update data',error);
        res.status(500).json('Internal server error');
    }
}

const deleteExpences = async (req, res) => {
    const {id} = req.params;
    console.log(id)
    try {
        const result = await Expences.findOneAndDelete({ expences_Id:id });
        console.log({data:result});
        if (!result) {
            return res.json('Data not found');
        }
        res.status(200).json({ msg: 'success', data: result });
    } catch (error) {
        console.error('Error occurring during the delete data:', error);
        res.status(500).json('Internal server error');
    }
};


module.exports={
    addExpences,
    getAllExpences,
    getExpencesById,
    updateExpences,
    deleteExpences
}