const router = require('express-promise-router')();
const usersController = require('../controllers/users.controller');

// ==> Definindo as rotas do CRUD - 'People':

// ==> Rota responsável por criar um novo 'Pessoas': (POST): localhost:3000/api/users
router.post('/users', usersController.createUsers);

// ==> Rota responsável por listar todas 'Pessoas': (GET): localhost:3000/api/users
router.get('/users', usersController.listAllUsers);

// ==> Rota responsável por selecionar 'Pessoas' pelo 'Id': (GET): localhost:3000/api/users/:id
router.get('/users/:id', usersController.findUsersById);

// ==> Rota responsável por atualizar 'Product' pelo 'Id': (PUT): localhost: 3000/api/users/:id
router.put('/users/:id', usersController.updateUsersById);

// ==> Rota responsável por excluir 'Pessoa' pelo 'Id': (DELETE): localhost:3000/api/users/:id
router.delete('/users/:id', usersController.deleteUsersById);

module.exports = router;
