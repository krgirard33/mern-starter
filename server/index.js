require("dotenv").config();
const cors = require("cors");
const express = require("express");
const connectDB = require("./connectDB");
const Book = require('./models/Books');

const app = express();
const PORT = process.env.PORT || 8000;

connectDB();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json("Hello mate!");
});

// Sends status for all other pages
app.get("*", (req, res) => {
  res.sendStatus("404");
});

app.listen(PORT, ()=> {
  console.log(`Server is running on Port: ${PORT}`)
});