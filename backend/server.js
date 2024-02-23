const express = require("express");
const dotenv = require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "hello" });
});

app.listen(3000, () => {
  console.log("server started on port 3000");
});
