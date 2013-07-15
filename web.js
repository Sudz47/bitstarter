var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
     var fs = require('fs');
     var buf = new Buffer(256);
     fs.read('index.html', buf, 0, 15,0);
     response.send(bud.toString());

};
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
