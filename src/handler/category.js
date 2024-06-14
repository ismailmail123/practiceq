class CategorieHandler {
    constructor(categorieService) {
        this.categorieService = categorieService;

        // Binding
        this.getAll = this.getAll.bind(this);
        this.create = this.create.bind(this);
    }

    getAll(req, res) {
        const categories = this.categorieService.getAll();

        res.status(200).send({
            categories: categories
        });
    }

    create(req, res) {
        const categorie = req.body;
        const createdcategorie = this.categorieService.create(categorie);

        res.status(201).send({
            message: createdcategorie
        })
    }
}

module.exports = CategorieHandler;