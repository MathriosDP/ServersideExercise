var testimonialsService = require('../service/testimonialsService');

module.exports = {
    index(req, res, router) {
        var testimonials = testimonialsService.getTestimonials();

        var viewData = {
            title:'Depoimentos',
            testimonials: testimonials
        }; 

        res.render('testimonials', viewData);
    },
}
