const express = require('express');
const app = express();
const PORT = 3000;

// Import dependecy
// Import repository
const UserRepository = require('./src/repository/user');
const ProductRepository = require('./src/repository/product');
const CategorieRepository = require('./src/repository/category');

// Import service
const UserService = require('./src/service/user');
const ProductService = require('./src/service/product');
const CategorieService = require('./src/service/category');

// Import handler
const UserHandler = require('./src/handler/user');
const ProductHandler = require('./src/handler/product');
const CategorieHandler = require('./src/handler/category');

app.use(express.json());

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userHandler = new UserHandler(userService);

app.get('/users', userHandler.getAll);
app.get('/users/:email', userHandler.getByEmail);
app.post('/login', userHandler.login);
app.post('/register', userHandler.register);

const productRepository = new ProductRepository();
const productService = new ProductService(productRepository, userRepository);
const productHandler = new ProductHandler(productService);

const categorieRepository = new CategorieRepository();
const categorieService = new CategorieService(categorieRepository, productRepository, userRepository);
const categorieHandler = new CategorieHandler(categorieService);

// TODO:
// Get products
// [
//  {
//    name: 'hp samsung',
//    price: 20000,
//    user: {
//      name: "han vir",
//      email: 'hanvir@gmail.com'
//    },
//    category: {
//      name: "handphone"
//    }
//  }
// ]
app.get('/products', productHandler.getAll);
app.post('/products', productHandler.create);
app.get('/products/:category_code', productHandler.getByCode);
app.get('/categories', categorieHandler.getAll);
app.post('/categories', categorieHandler.create);

app.listen(PORT, function() {
    console.log(`Server berjalan pada http://localhost:${PORT}`);
});

// TODO:
// app.get('/categories', productHandler.getAll);
// app.post('/categories', productHandler.create);

// Arsitektur Backend NodeJS
// 3 layers:
// 1. Handler
// 2. Service
// 3. Repository