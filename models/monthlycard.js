const mongoose = require('mongoose');

const MonthlyCardSchema = new mongoose.Schema(
  {
    monthlycard_Id: {
      type:Number,
      unique: true,
      required: true,
      default: generateMonthlyCardId,
    },

    customer_Id: {
      type: Number,
      required: true,
    },

    delivery_Date: {
      type: Date,
      required: true,
    },

    deliverd_Jar: {
        type:Number,
        default:null
    },

    recived_Jar: {
        type:Number,
        default:null
    },

  },
  { timestamps: true }
);

// function generateMonthlyCardId() {
//   return Math.floor(100000 + Math.random() * 900000).toString();
// }

let Counter = 0; 
function generateMonthlyCardId() {
    Counter++;
    return Counter.toString(); 
}

const MonthlyCard = mongoose.model("monthlycardData",MonthlyCardSchema,"monthlycard")
module.exports = MonthlyCard;
