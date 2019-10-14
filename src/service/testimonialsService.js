var fs = require('fs');

var testimonialsFilePath = 'db/testimonials.json'; 

var getTestimonials = function() {
    var testimonialsData = fs.readFileSync(testimonialsFilePath, 'utf8');

    return testimonials;
}

module.exports = {
    getTestimonials: getTestimonials
}