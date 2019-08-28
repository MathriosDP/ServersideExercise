var express = require('express');
var router = express.Router();
var postsServices = require('../service/postsService');
var projectServices = require('../service/projectService');

/* GET home page. */
router.get('/', function(req, res, next) {
  var post = postsServices.getPosts();

  res.render('index', { title: 'Blog', post: post});
});

router.get('/home', function(req, res, next) {
  var post = postsServices.getPosts();

  res.render('home', { title: 'Home', post: post});
});

router.get('/projects', function(req, res, next) {
  var project = projectServices.getProjects();

  res.render('projects', { title: 'Projects', project: project});
});

router.get('/post/:postId', function(req, res, next){
  var postId = req.params.postId;

  var posts = postsServices.getPosts();

  var post = posts.filter((post) => post.id == postId)[0];

  res.render('post', {title: post.title, post: post});
});

router.get('/project/:projectId', function(req, res, next) {
  var projectId = req.params.projectId;

  var projects = projectServices.getProjects();

  var project = projects.filter((project) => project.id == projectId)[0];

  res.render('project', {title: project.name, project: project});
})

module.exports = router;
