var express = require ('express');
var app = express();

var port = process.env.PORT || 3000;

//this will render the index.html page in the public folder for the homepage.
app.use('/', express.static(__dirname + '/public'));

app.listen(port);

