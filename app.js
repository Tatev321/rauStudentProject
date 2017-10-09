var express = require('express');
var app = express();
var path = require('path')

var port = 3001;

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, function() {
	console.log('application runs in port 3001')
})

app.use('/resources', express.static('resources'));
