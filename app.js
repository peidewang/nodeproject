
/**
 * Module dependencies
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('resources', path.join(__dirname, 'resources'));
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.indexpage);
app.get('/intropage', routes.intropage);
app.get('/formpage', routes.formpage);
app.get('/transpage', routes.trans);
app.get('/:page', routes.anypage);
app.get('/users', user.list);
app.post('/formpage', routes.handlepost, routes.formpage);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
  console.log('__dirname :' + __dirname );
});
