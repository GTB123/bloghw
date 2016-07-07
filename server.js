var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static('./public'));
app.use(bodyParser());

app.listen(8080, function() {
	console.log('Server listening at http://localhost:8080');
});

var items = [];

app.get('/items', function(req,res) {
	res.json(items);
});


app.post('/items', function(req,res) {
	console.log('POST /items: ', req.body);
	items.push(req.body);
	res.json(items);
});