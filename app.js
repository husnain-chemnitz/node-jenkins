var express = require("expres");
var app = express();

app.get("/", function (req, res) {
  res.send("Hello World Husnain Manj in chemnitz Germany");
});

app.listen(4000);
