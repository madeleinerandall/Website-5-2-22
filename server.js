const express = require("express");
const path = require("path");

const app = express(); // create express app

app.use(express.static(path.join(__dirname, ".")));

// start express server on port 5000
app.listen(3000, () => {
  console.log("express server started on port 3000");
});