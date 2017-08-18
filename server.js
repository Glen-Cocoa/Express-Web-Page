var express = require('express');
var users = require('./lib/userModule.js');
var posts = require('./lib/postModule.js');

var app = express()
app.set('view engine', 'pug');
//app.use("/public", express.static(__dirname + '/public'));


app.get('/',function(req,res){
  res.render('index', {
		users: users.all()
		});
});


app.get('/users',function(req,res){
  res.render('index', {
		users: users.all()
		});
	});

app.get('/users/:id', function(req, res) {
		res.render('userProfile', {
			users: users.getUserbyID(req.params.id),
			posts: posts.searchPosts(req.params.id)
		});
	});

app.get('/posts', function(req,res){
	res.render('postHistory', {
		posts: posts.searchPosts()
	});
});

app.get('/posts/:id', function(req,res){
	res.render('postHistory', {
		posts: posts.getPostsbyID(req.params.id)
	});
});


	var logger = function(req, res, next) {
		console.log(req.method, req.url);
		next();
	};

var listener = app.listen(4200, function() {
		console.log('Server started on ' + listener.address().port);
	});