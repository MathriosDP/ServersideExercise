const fs = require('fs');
const path = require('path');

const postsFilePath = path.resolve(__dirname, '..', '..', 'db', 'products.json');

var loadProduct = function() {
    const fileData = fs.readFileSync(postsFilePath, 'utf8');
    const posts = JSON.parse(fileData);

    return posts;
}

var saveProduct = function(posts) {
    const data = JSON.stringify(posts);
    fs.writeFileSync(postsFilePath, data, 'utf8');
}

var getProducts = function() {
    var posts = loadProduct();
    return posts;
}

var createProduct = function(newProduct) {
    var posts = loadProduct();
    posts.push(newProduct);

    saveProduct(posts);
}

module.exports = {
    getProducts,
    createProduct
}