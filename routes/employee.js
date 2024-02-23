const express = require('express');
const router = express.Router();
const Employee = require('../controller/employee');

router.post('/employee',Employee.addEmployee);
router.get('/employee',Employee.getEmployee);
router.get('/employee/:eid',Employee.getEmployeeById);
router.put('/employee/:eid',Employee.updateEmployeeById);
router.delete('/employee/:eid',Employee.deleteEmployeeById);


module.exports=router;