const categories = [{
        code: "lp",
        name: "laptop",
    },
    {
        code: "hp",
        name: "handphone",
    }
];

class CategorieRepository {
    constructor() {
        this.categories = categories;
    }

    getAll() {
        return this.categories;
    }

    insert(categorie) {
        if (!categorie || Object.keys(categorie).length === 0) {
            return "error: data kosong"
        }
        this.categories.push(categorie);

        return categorie;
    }
}

module.exports = CategorieRepository;