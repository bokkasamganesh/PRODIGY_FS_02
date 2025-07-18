const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  department: { type: String, required: true },
  role: { type: String, required: true },
  email: { type: String, required: true, unique: true }
});

module.exports = mongoose.model("Employee", employeeSchema);
