var projectServices = require('../service/projectService');

module.exports = {
    index(req, res) {
        var project = projectServices.getProjects();

        res.render('projects', { title: 'Projects', project: project});
    },

    show(req, res) {
        var projectId = req.params.projectId;

        var projects = projectServices.getProjects();

        var project = projects.filter((project) => project.id == projectId)[0];

        res.render('project', {title: project.name, project: project});
    }
}
