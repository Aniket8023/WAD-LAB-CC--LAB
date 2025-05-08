const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

require("./database"); // Ensure mongoose connection happens
const employeeController = require("./controllers/employeeController");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:4200" })); // Frontend origin

// API Route
app.use("/employees", employeeController);

// Start server
const PORT = 3200;
app.listen(PORT, () => console.log(`🚀 Server started at http://localhost:${PORT}`));
