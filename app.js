var express = require('express');
var app = express();
var path = require('path')

var port = 3001;

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/get-students', function(req, res) {
	res.send({data: ["el1", "el2", "el3"]}).status(200);
});

app.listen(port, function() {
	console.log('application runs in port 3001')
})

app.use('/resources', express.static('resources'));
