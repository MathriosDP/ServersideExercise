var postsServices = require('../service/postsService');

module.exports = {
    index(req, res, router) {
        var posts = postsServices.getPosts();

        res.render('index', { posts });
    },

    show(req, res) {
        var postId = req.params.postId;

        var posts = postsServices.getPosts();

        var post = posts.filter((post) => post.id == postId)[0];

        res.render('post', {title: post.title, post });
    },
}
