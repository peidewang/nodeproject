var fs = require('fs');
var request = require('request');
var htmlparser = require('htmlparser');
var configFilename = './rss_feeds.txt';
var http = require('http');

function checkForRSSFile () {
  fs.exists(configFilename, function(exists) {
    if (!exists)
      return next(new Error('Missing RSS file: ' + configFilename));

    next(null, configFilename);
  });
}

function readRSSFile (configFilename) {
  fs.readFile(configFilename, function(err, feedList) {
    if (err) return next(err);

    feedList = feedList
               .toString()
               .replace(/^\s+|\s+$/g, '')
               .split("\n");
    var random = Math.floor(Math.random()*feedList.length);
    next(null, feedList[random]);
  });
}

function downloadRSSFeed (feedUrl) {
  request({uri: feedUrl}, function(err, res, body) {
    if (err) return next(err);
    if (res.statusCode != 200)
      return next(new Error('Abnormal response status code'))

    next(null, body);
  });
}

function parseRSSFeed (rss) {
  var handler = new htmlparser.RssHandler();
  var parser = new htmlparser.Parser(handler);
  parser.parseComplete(rss);

  if (!handler.dom.items.length)
    return next(new Error('No RSS items found'));

  var item = handler.dom.items.shift();
  console.log("the title is: " + item.title);
  console.log("the link is: " + item.link);
  console.log("the description is: "+item.description);
  next(null, item.link);
}

function readContent (link) {
  var APIURL = 'https://readability.com/api/content/v1/parser?token=d99a878dfeb0d6159c2c387b90e07462b080c957&url=' + link; 
  console.log("API URL =" + APIURL);
  request({uri: APIURL  }, function(err, res, body) {
    if (err) return next(err);
    if (res.statusCode != 200)
      return next(new Error('Abnormal response status code'));
    var obj = eval("(" + res.body + ')');
    var content = obj.content;
    console.log("res content:" + content);
    next(null, content)
  });
}  

function publish (content) {
  var http = require('http');
var server = http.createServer(function(req, res){
  res.write(content);
  res.end();
});
server.listen(3000, '127.0.0.1');
}

var tasks = [ checkForRSSFile,
              readRSSFile,
              downloadRSSFeed,
              parseRSSFeed,
              readContent ,
              publish ];

function next(err, result) {
  if (err) throw err;

  var currentTask = tasks.shift();

  if (currentTask) {
    currentTask(result);
  }
}

next();
