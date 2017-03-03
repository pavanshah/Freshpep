var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var mongo = require("./routes/mongo");
//var mongoConnectURL = "mongodb://pavanshah77:pavanshah77@ds129028.mlab.com:29028/helpmyusersdatabase";
var mongoConnectURL = "mongodb://pavanshah77:pavanshah77@ds113680.mlab.com:13680/freshpepdb";

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));




// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);

mongo.connect(mongoConnectURL, function(){
  console.log('Connected to mongo at: ' + mongoConnectURL);
	http.createServer(app).listen(app.get('port'), function(){
  		console.log('Express server listening on port ' + app.get('port'));
  }); 
});
