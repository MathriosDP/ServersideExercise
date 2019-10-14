const fs = require('fs');
const path = require('path');

const postsFilePath = path.resolve(__dirname, '..', '..', 'db', 'posts.json');

var loadPosts = function() {
    const fileData = fs.readFileSync(postsFilePath, 'utf8');
    const posts = JSON.parse(fileData);

    return posts;
}

var savePost = function(posts) {
    const data = JSON.stringify(posts);
    fs.writeFileSync(postsFilePath, data, 'utf8');
}

var getPosts = function() {
    var posts = loadPosts();
    return posts;
}

var createPost = function(newPost) {
    var posts = loadPosts();
    posts.push(newPost);

    savePost(posts);
}

module.exports = {
    getPosts,
    createPost
}