var ProductsService = require('../service/productsService');

module.exports = {
    index(req, res, router) {
        var products = ProductsService.getProducts();

        res.render('products', { products });
    },

    store(req, res, router) {
        const { name } = req.body;
        const { description } = req.body;
        const { price } = req.body;
        const { image } = req.body;

        var id = ProductsService.getProducts().length + 1;

        ProductsService.createProduct({
          id,
          name,
          description,
          price,
          image
        });

          res.redirect('../../admin/products/');
    }
}
