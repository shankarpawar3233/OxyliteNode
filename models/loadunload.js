const mongoose= require('mongoose');

const LoadUnloadSchema = new mongoose.Schema({

    loadunload_Id:{  type: String,
        unique: true,
        required: true,
        default: generateLoadUnloadId
    },
    full_name: {
        type: String,
        required: true
    },
    shift_timing: {
        type: String,
        enum: ['Morning', 'Afternoon', 'Evening']
    },
    load_Qty:{
        type:Number,
        default:null
    },
    delivered_Qty:{
        type:Number,
        default:null
    },
    empty_received_Qty:{
        type:Number,
        default:null
    },
    filled_unload_Qty:{
        type:Number,
        default:null
    },
    empty_unload_Qty:{
        type:Number,
        default:null
    }
},
{timestamps:true}
);
function  generateLoadUnloadId() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

const LoadUnload = mongoose.model("loadunloadData",LoadUnloadSchema,"loadunload")

module.exports=LoadUnload;