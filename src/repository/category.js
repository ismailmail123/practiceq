const categories = [{
        code: "lp",
        name: "laptop",
    },
    {
        code: "hp",
        name: "handphone",
    }
];

class CategoryRepository {
    constructor() {
        this.categories = categories;
    }

    getAll() {
        return this.categories;
    }

    insert(categorie) {
        this.categories.push(categorie);
        return categorie;
    }
}

module.exports = CategoryRepository;