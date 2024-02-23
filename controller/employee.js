const Employee = require("../models/employee");

// const addEmployee = async (req, res) => {
//   try {
//     const result = await employee.create(req.body);
//     res.json({ responsse_code: 200, response_msg: "success", data: result });
//   } catch (error) {
//     console.error("Error creating for employee:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }

// };

const addEmployee = async (req, res) => {
  try {
    // Access the employee data from the request body
    const {
      employee_name,
      date_of_birth,
      gender,
      contact_information,
      employee_address,
      employee_type,
      joining_date,
      salary,
      employment_status,
      emergency_contact,
    } = req.body;

    // Create a new employee document
    const newEmployee = new Employee({
      employee_name,
      date_of_birth,
      gender,
      contact_information,
      employee_address,
      employee_type,
      joining_date,
      salary,
      employment_status,
      emergency_contact,
    });

    // Save the employee to the database
    await newEmployee.save();
console.log(newEmployee);
    res
      .status(201)
      .json({
        success: true,
        message: "Employee added successfully",
        data: newEmployee,
      });
  } catch (error) {
    console.error("Error adding employee:", error);
    res
      .status(500)
      .json({
        success: false,
        message: "Failed to add employee",
        error: error.message,
      });
  }
};

const getEmployee = async (req, res) => {
  try {
    const result = await Employee.find();
    res.json({ responsse_code: 200, response_msg: "success", data: result });
  } catch (error) {
    console.error("Error for fetching employee details:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getEmployeeById = async (req, res) => {
  const eid  = req.params.eid;
  try {
    const result = await Employee.findOne({ employee_Id: eid });
    if (!result) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.json({ responsse_code: 200, response_msg: "success", data: result });
  } catch (error) {
    console.error("Error for fetching employee details:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateEmployeeById = async (req, res) => {
  const eid  = req.params.eid;
  try {
    const {
      employee_name,
      date_of_birth,
      gender,
      contact_information,
      employee_address,
      employee_type,
      joining_date,
      salary,
      employment_status,
      emergency_contact,
    } = req.body;
    const result = await Employee.findOneAndUpdate(
      { employee_Id: eid },
      {
        employee_name,
        date_of_birth,
        gender,
        contact_information,
        employee_address,
        employee_type,
        joining_date,
        salary,
        employment_status,
        emergency_contact,
      },
      { new: true } // To return the updated document
    );
    if (!result) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.json({
      response_code: 200,
      response_msg: "success",
      data: result,
    });
  } catch (error) {
    console.error("Error updating employee details:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};


const deleteEmployeeById = async (req, res) => {
  const eid = req.params.eid;
  try {
    const result = await Employee.findOneAndDelete({ employee_Id: eid });
    if (!result) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.json({
      response_code: 200,
      response_msg: "success",
      data: result,
    });
  } catch (error) {
    console.error("Error deleting employee details:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  addEmployee,
  getEmployee,
  getEmployeeById,
  updateEmployeeById,
  deleteEmployeeById,
};
