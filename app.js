const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");
const env = require("dotenv");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
env.config();

const flightRouter = require("./router/flightRouter");
const hotelRouter = require("./router/hotelRouter");
const trainRouter = require("./router/trainRouter");

const DB_URI = process.env.DB_URI || "mongodb://localhost:27017/mmt";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(DB_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

const port = process.env.PORT || 3000;
connectDB().then(() => {
  app.listen(port, () => {
    console.log("listening for requests");
  });
});

app.use("/api/v1/flights", flightRouter);
app.use("/api/v1/trains", trainRouter);
app.use("/api/v1/hotels", hotelRouter);

app.all("*", (req, res) => {
  res.status(400).json({
    status: "error",
    message: `Can't find ${req.originalUrl} on this server!`,
  });
});

module.exports = app;
