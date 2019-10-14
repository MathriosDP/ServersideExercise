var opportunityService = require('../service/opportunityService');

module.exports = {
    index(req, res) {
        var opportunity = opportunityService.getOpportunity();

        res.render('opportunity', {title: opportunity.nameOpportunity, opportunity: opportunity});
    },
}
