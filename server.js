var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());

app.listen(6789, function() {
  console.log("listening on port 6789");
})

app.use(express.static(__dirname + "/static"));
