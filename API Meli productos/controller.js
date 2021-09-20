exports.fetchProducts = function fetchProducts (req, res, next) {
    demoService.getProducts()
    .then(data => {
      res.locals.products = data
      next()
    })
  }