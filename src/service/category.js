class CategoryService {
    constructor(categoryRepository, productRepository, userRepository) {
        this.categoryRepository = categoryRepository;
        this.productRepository = productRepository;
        this.userRepository = userRepository
    }

    getAll() {
        const categories = this.categoryRepository.getAll();
        const categoriesUser = [];

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
    create(category) {
        if (!category || Object.keys(category).length === 0 || category.name.length === 0) {
            return "error: Data yang dikirim tidak sesuai"

        }
        const existCode = this.productRepository.getByCode(category.code);
        if (!existCode) {
            return "error: Kode tidak sesuai"

        }
        this.categoryRepository.insert(category)

        return "berhasil menambahkan product";
    }
}

module.exports = CategoryService;