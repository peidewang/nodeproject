

exports.indexpage = function(req, res){
	res.render('index', { title: 'Express title', content: 'this is a content' });
};

exports.intropage = function (req, res) {
	res.render ('index', { title: " intro page titel", content: "this is an intropage content"})
};

exports.anypage = function(req, res){
	res.render('index', {title: "this is" + req.params.page + 'page'});
};

exports.formpage = function (req, res) {
	res.render('form', { title: " this is form page", inputvalue: " this is empty inputvalue"});
};

exports.handlepost = function (req, res, next) {
	// body...
	var input1 = req.body.userinput1;
	var input2 = req.body.userinput2;
	console.log( "input1 = " + input1);
	console.log("input2 = " + input2);

	res.render('form', {title:"input validated", inputvalue: input1 + " " + input2});
	next();
};

exports.trans = function  (req, res) {
	// body...
	//res.send(" this is send by trans");
	var fs  = require('fs');
	var f = "index.html";
	fs.exists(f, function (exists) {
		if (exists){
			console.log("the file exists");
			fs.readFile(f, function (err, data) {
				if (err) { res.writeHead(500);
					res.end('Server Error!'); return; }
					var headers = {'Content-type': 'text/html'};
					res.writeHead(200, headers);
					res.end(data);
				});
			return;
		}
	});
}; 