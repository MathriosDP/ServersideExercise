var getOpportunity = function() {
    var opportunity = [
        {
            id: 1, 
            name_opportunity: 'Projetista Promob',
            experience: 'Possuir conhecimento básicos de computação; Ter ao menos 1 ano de experiência com o software promob; Conheimentos avançados em softwares de design.',
            salary: 2500.00,
            description: 'Desenvolver projetos 3D de ambientes',
            image: 'promob.jpg'
        },
        {
            id: 2, 
            name_opportunity: 'Programados de CLP',
            experience: 'Deve possuir ao menos 2 anos de atuação na area de programação de CLP\'s; Conhecimentos avançados a respeito do CLP da siemens',
            salary: 3000.00,
            description: 'Programar CLP\'s de marcas diversas conforme a demanda necessária das máquinas desenvolvidas',
            image: 'clp.jpg'
        },
        {
            id: 3, 
            name_opportunity: 'Elétrico de automação',
            experience: 'Possuir formação completa na área de elétrica e eletrônica; Estar no ramo ao menos 1 ano; Ter conhecimentos em drivers, programação, eletrônica e componentes elétricos.',
            salary: 3500.0,
            description: 'Projetar e construir quadros elétricos de máquinas de automação industrial. Dar manutenção em máquinas. Disponibilidade para viajar.',
            image: 'automacao.jpg'
        },
        {
            id: 4, 
            name_opportunity: 'Instalador de Estruturas',
            experience: 'Curso de solda.',
            salary: 2500.00,
            description: 'Instalar estruturas metálicas. Ter disponibilida para viajar.',
            image: 'estrutura.jpg'
        },
        {
            id: 5, 
            name_opportunity: 'Desenvolvedor Full-Stack',
            experience: 'Ter ao menos 3 anos de experiência como desenvolvedor. Conhecimentos de Oracle, node.js, Javascript, HTML, CSS, bootsrep.',
            salary: 3500.00,
            description: 'Trabalhar no desenvolvimento de software diversos.',
            image: 'desenvolvedor.jpg'
        },
    ]

    return opportunity;
}

module.exports = {
    getOpportunity: getOpportunity
}