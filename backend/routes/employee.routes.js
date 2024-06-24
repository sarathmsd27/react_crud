const express = require("express");
const app = express();

const employeeRoute = express.Router();
let EmployeeSchema = require("../model/employee.model");

// Get all employees
employeeRoute.route("/").get(async (req, res, next) => {
  try {
    const data = await EmployeeSchema.find();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

// Get employee by ID
employeeRoute.route("/employee/:id").get(async (req, res, next) => {
  try {
    const data = await EmployeeSchema.findById(req.params.id);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

// Add new employee
employeeRoute.route("/add-employee").post(async (req, res, next) => {
  try {
    const data = await EmployeeSchema.create(req.body);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

// Delete employee
employeeRoute.route("/del-employee/:id").delete(async (req, res, next) => {
  try {
    const data = await EmployeeSchema.findByIdAndRemove(req.params.id);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

// Update employee
employeeRoute.route("/update-employee/:id").put(async (req, res, next) => {
  try {
    const data = await EmployeeSchema.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.json(data);
    console.log("updated successfully");
  } catch (error) {
    next(error);
  }
});

module.exports = employeeRoute;
