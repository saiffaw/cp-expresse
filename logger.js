const express = require("express");
const app = express();

const date = Date();

var datee = new Date(date);
const hours = datee.getHours();
const days = datee.getDay();
app.get("/", (req, res) => {
  if (hours > 9) {
    res.send("sorry we are closed");
  }
});
