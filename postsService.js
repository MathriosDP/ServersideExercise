var getPosts = function() {
    var post = 
    [
        {
            title: 'Post 1',
            image: 'post1.jpg',
            description: 'Meu primeiro post',
            body: 'Meu primeiro carro' 
        },
        {
            title: 'Post 2',
            image: 'post2.jpg',
            description: 'Meu segundo post',
            body: 'Meu segundo carro'
        }
    ]

    return post;
}

module.exports = {
    getPosts: getPosts
}