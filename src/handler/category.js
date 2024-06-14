class CategoryHandler {
    constructor(categoryService) {
        this.categoryService = categoryService;

        // Binding
        this.getAll = this.getAll.bind(this);
        this.create = this.create.bind(this);
    }

    getAll(req, res) {
        const categories = this.categoryService.getAll();

        res.status(200).send({
            categories: categories
        });
    }

    create(req, res) {
        const category = req.body;
        const createdcategory = this.categoryService.create(category);

        res.status(201).send({
            message: createdcategory
        })
    }
}

module.exports = CategoryHandler;