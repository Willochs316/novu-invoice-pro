const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
const PORT = 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Invoice");
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
