const express = require("express");
const cors = require("cors");
const connectDB = require("./config/database");
const contactRoutes = require("./routes/contactRoutes");
const errorHandler = require("./middleware/errorHandler");

require("dotenv").config();

const app = express();

connectDB();
app.use(cors());
app.use(express.json());
app.use("/contacts", contactRoutes);
app.use(errorHandler);

module.exports = app;
