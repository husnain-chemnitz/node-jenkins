var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.end("Hello World Husnain Manj in chemnitz Germany");
});

app.listen(4000);
