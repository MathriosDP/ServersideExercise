const fs    = require('fs');
const path  = require('path');

const testimonialsFilePath = path.resolve(__dirname, '..', '..', 'db', 'testimonials.json'); 

var loadPosts = function() {
    const fileData = fs.readFileSync(testimonialsFilePath, 'utf8');
    const testimonials = JSON.parse(fileData);

    return testimonials;
}

var savePost = function(testimonials) {
    const data = JSON.stringify(testimonials);
    fs.writeFileSync(testimonialsFilePath, data, 'utf8');
}

var getTestimonials = function() {
    return loadPosts();
}

var creatTestimonial = function(newTestimonial) {
    const testimonials = loadPosts();
    testimonials.push(newTestimonial);

    savePost(testimonials);
}


module.exports = {
    getTestimonials,
    creatTestimonial
}