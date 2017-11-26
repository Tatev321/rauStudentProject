var express = require('express');
var app = express();
var path = require('path')
app.set('view engine', 'ejs');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var port = 3001;
var fs = require("fs");
var students = require(__dirname+'/resources/json/students.json');

 
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/show-students', function(req, res) {
	res.render('show-students', { students: students } );
});

app.post('/get-students', function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	students.push(req.body);
	students = JSON.stringify(students);
	fs.writeFile(__dirname+'/resources/json/students.json', students, 'utf8', function (err) {
		if (err) {
			return console.log(err);
		}
		console.log("The file was saved!");
	}); 
    res.send(req.body);
});

app.listen(port, function() {
	console.log('our application runs good in port 3001')
});


app.use('/resources', express.static('resources'));
