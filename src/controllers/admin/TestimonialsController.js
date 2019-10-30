var testimonialsService = require('../../service/testimonialsService');

module.exports = {
    index(req, res, router) {
        var testimonials = testimonialsService.getTestimonials();

        res.render('admin/testimonials/index', { testimonials });
    },

    store(req, res, router) {
        const { name } = req.body;
        const { company } = req.body;
        const { title } = req.body;
        const { testimony } = req.body;

        var id = testimonialsService.getTestimonials().length + 1;

        testimonialsService.creatTestimonial({
          id,
          name,
          company,
          title,
          testimony
        });

        res.redirect('../../admin/testimonials');
    }
}
