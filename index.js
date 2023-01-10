const express = require("express");
const app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("client"));
app.use(express.static("style"));

const date = Date();
const datee = new Date(date);
const hours = datee.getHours();
const days = datee.getDay();
console.log(hours);
console.log(days);
app.get("/", function (req, res) {
  if (hours < 9 && hours < 17) {
    res.sendFile(__dirname + "/index.html");
  } else {
    res.sendFile(__dirname + "/closed.html");
  }
});
app.get("/index.html", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.get("/contact.html", function (req, res) {
  res.sendFile(__dirname + "/contact.html");
});
app.get("/servise.html", function (req, res) {
  res.sendFile(__dirname + "/servise.html");
});

app.listen("5000", () => {
  console.log("lisning om port 5000");
});
