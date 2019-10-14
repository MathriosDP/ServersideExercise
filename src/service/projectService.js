var getProjects = function() {
    var projects = [
        {
            id: 1, 
            name: 'Projeto',
            image: 'redes.jpg',
            subject: 'Redes',
            description: 'Projeto da disciplina de redes'
        },
        {
            id: 2, 
            name: 'Projeto',
            image: 'serverSide.jpg',
            subject: 'Programação server-side',
            description: 'Projeto da disciplina de programação server-side'
        },
        {
            id: 3, 
            name: 'Projeto',
            image: 'front.png',
            subject: 'front-and',
            description: 'Projeto da disciplina de programação front-and'
        },
        {
            id: 4, 
            name: 'Projeto',
            image: 'pac.jpg',
            subject: 'PAC',
            description: 'Projeto da disciplina PAC'
        },
        {
            id: 5, 
            name: 'Projeto',
            image: 'requisitos.png',
            subject: 'Requisitos',
            description: 'Projeto da disciplina de requisitos'
        },
        {
            id: 6, 
            name: 'Projeto',
            image: 'tdd.png',
            subject: 'TDD',
            description: 'Projeto da disciplina de testes'
        },
    ]

    return projects;
}

module.exports = {
    getProjects: getProjects
}