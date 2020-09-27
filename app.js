var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("Hello World Husnain");
});

app.listen(4000);
