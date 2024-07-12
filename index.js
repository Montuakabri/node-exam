const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const articleRoutes = require("./routes/articleRoutes");
const authMiddleware = require("./middleware/authMiddleware");
const dbconnect = require("./middleware/dbconnect");
const dotenv = require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

dbconnect();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use("/", authRoutes);
app.use("/", authMiddleware.requireAuth, articleRoutes);
