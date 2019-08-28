var getPosts = function() {
    var post = 
    [
        {
            id: 1,
            title: 'Post 1',
            image: 'mercedes.jpg',
            description: 'Meu primeiro post',
            body: 'Meu primeiro carro' 
        },
        {
            id: 2,
            title: 'Post 2',
            image: 'ferrari.jpg',
            description: 'Meu segundo post',
            body: 'Meu segundo carro'
        },
        {
            id: 3,
            title: 'Post 3',
            image: 'rbr.jpg',
            description: 'Meu terceiro post',
            body: 'Meu terceiro carro'
        },
        {
            id: 4,
            title: 'Post 4',
            image: 'willians.jpg',
            description: 'Meu quarto post',
            body: 'Meu quarto carro'
        },
        {
            id: 5,
            title: 'Post 5',
            image: 'haas.jpg',
            description: 'Meu quinto post',
            body: 'Meu quinto carro'
        },
        {
            id: 6,
            title: 'Post 6',
            image: 'mclarem.jpg',
            description: 'Meu sexto post',
            body: 'Meu sexto carro'
        }
    ]

    return post;
}

module.exports = {
    getPosts: getPosts
}