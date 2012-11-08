
/**
 * Module dependencies.
 */

var express = require('express'),
	routes = require('./routes/measures'),
	http = require('http'),
	path = require('path');

measures = routes.CreateMeasureRoutes();

var app = express();

app.configure(function(){
	app.set('port', process.env.PORT || 3000);
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
	app.use(express.errorHandler());
});

app.get('/measures', measures.findAll);

http.createServer(app).listen(app.get('port'), function(){
	console.log("Rain server listening on port " + app.get('port'));
});
