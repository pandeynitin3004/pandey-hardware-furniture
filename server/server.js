const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const Enquiry = require("./models/Enquiry");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

app.get("/", (req, res) => {
  res.send("Pandey Hardware Backend is running!");
});
app.post("/api/enquiries", async (req, res) => {
  try {
    const { name, phone, product, message } = req.body;

    const enquiry = new Enquiry({
      name,
      phone,
      product,
      message,
    });

    await enquiry.save();

    res.status(201).json({
      success: true,
      message: "Enquiry saved successfully",
      enquiry,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to save enquiry",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});