var port = process.env.PORT || 3000;

var express = require('express');
var multer = require('multer'),
    upload = multer({dest:'./uploads'}),
    bodyParser = require('body-parser'),
    path = require('path');

var app = express();
app.use(bodyParser.json());
app.set('view engine', 'ejs');

var routes = require('./routes/routes.js')(app, upload);


var server = app.listen(port, function(){
    console.log('Server at localhost:' + port);
});

