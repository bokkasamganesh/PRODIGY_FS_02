const express = require("express");
const { createEmployee, getEmployees, updateEmployee, deleteEmployee } = require("../controllers/employeeController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", protect, createEmployee);
router.get("/", protect, getEmployees);
router.put("/:id", protect, updateEmployee);
router.delete("/:id", protect, deleteEmployee);

module.exports = router;
