var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("Hello World Husnain Manj in chemnitz");
});

app.listen(4000);
