const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/vinted-backend");

// routes
const userRoutes = require("./routes/user");
const offerRoutes = require("./routes/offer");

app.use(userRoutes);
app.use(offerRoutes);

app.get("/", (req, res) => {
  res.status(200).json("it's all ok !");
});

app.all("*", (req, res) => {
  res.status(404).json("Page not found !");
});
app.listen(3000, () => {
  console.log("Server started ");
});
