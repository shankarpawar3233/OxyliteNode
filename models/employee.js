const mongoose = require('mongoose');

const EmployeesSchema = new mongoose.Schema({
    employee_Id:{
        type: String,
        unique: true,
        required: true,
        default: generateEmployeeId
    },
    employee_name: {
        first_name: {
            type: String,
            required: true
        },
        last_name: {
            type: String,
            required: true
        }
    },
    date_of_birth: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other']
    },
    contact_information:{
        phone:Number,
        email:String
    },
    employee_address:{
        curent_address:String,
        parmanent_address:String
    },
    employee_type: {
        type: String,
        enum: ['Manager', 'Shopkeeper', 'Deliveryboy'],
        required: true
    },
    joining_date: {
        type: Date,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    employment_status: {
        type: String,
        enum: ['Active', 'On Leave', 'Terminated'],
        default: 'Active'
    },
    emergency_contact: {
        name: String,
        relationship: String,
        phone: Number
    }
   },
   { timestamps: true }
);

function  generateEmployeeId() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

const Employee = mongoose.model('employeeData',EmployeesSchema,"employee");
module.exports=Employee;