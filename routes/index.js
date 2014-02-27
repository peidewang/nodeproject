
/*
 * GET home page.
 */

exports.indexpage = function(req, res){
  res.render('index', { title: 'Express title', content: 'this is a content' });
};

exports.intropage = function (req, res) {
	res.render ('index', { title: " intro page titel", content: "this is intropage content"})
};

exports.anypage = function(req, res){
	res.render('index', {title: "this is" + req.params.page + 'page'});
};