const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let employeeSchema = new Schema(
  {
    name: {
      type: String,
    },
    age: {
      type: Number,
    },
    email: {
      type: String,
    },
  },
  {
    collection: "employeeData",
  }
);
module.exports = mongoose.model("EmployeeSchema", employeeSchema);
