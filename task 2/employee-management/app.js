const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const employeeRoutes = require("./routes/employeeRoutes");

dotenv.config();
const app = express();
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("MongoDB Error:", err));

// Routes
app.use("/api/employees", employeeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
