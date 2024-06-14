class ProductHandler {
    constructor(productService) {
        this.productService = productService;

        // Binding
        this.getAll = this.getAll.bind(this);
        this.getByCode = this.getByCode.bind(this);
        this.create = this.create.bind(this);
    }

    getAll(req, res) {
        const products = this.productService.getAll();

        res.status(200).send({
            products: products
        });
    }

    getByCode(req, res) {
        const code = req.params.category_code;
        const product = this.productService.getByCode(code);

        let statusCode = 200;

        if (product === null) {
            statusCode = 404;
        }

        res.status(statusCode).send({
            product: product
        });
    }

    create(req, res) {
        const product = req.body;
        const createdProduct = this.productService.create(product);

        res.status(201).send({
            message: createdProduct
        })
    }
}

module.exports = ProductHandler;