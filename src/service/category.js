class CategoryService {
    constructor(categorieRepository, productRepository, userRepository) {
        this.categorieRepository = categorieRepository;
        this.productRepository = productRepository;
        this.userRepository = userRepository
    }

    getAll() {
        const categories = this.categorieRepository.getAll();
        const categoriesUser = [];

        // Isi data productUser dengan categories dan user yang sesuai
        for (let i = 0; i < categories.length; i++) {
            const productss = this.productRepository.getByCode(categories[i].code);
            const user = this.userRepository.getByEmail(productss.user_email);
            const categorieWithUser = {
                name: productss.name,
                price: productss.price,
                user: {
                    name: user.name,
                    email: user.email,
                },
                category: {
                    name: categories[i].name,
                }
            }
            categoriesUser.push(categorieWithUser);
        }
        return categoriesUser;
    }
    create(categorie) {
        this.categorieRepository.insert(categorie)

        return "berhasil menambahkan product";
    }
}

module.exports = CategoryService;