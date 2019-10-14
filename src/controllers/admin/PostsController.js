var postsServices = require('../../service/postsService');

module.exports = {
    index(req, res, router) {
        var posts = postsServices.getPosts();

        res.render('admin/posts/index', { posts });
    },

    store(req, res) {
        const { title } = req.body;
        const { description } = req.body;
        const { body } = req.body;
        const { image } = req.body;

        let id = postsServices.getPosts().length + 1; 

        postsServices.createPost({
            id,
            title,
            description,
            body,
            image
        });

        res.redirect('../../admin/posts');
    }
}
