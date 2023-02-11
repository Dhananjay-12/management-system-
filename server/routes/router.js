const express = require('express');
const route = express.Router();
const { homeRoutes, addUser, updateUser } = require('./../services/render');
const controller = require('./../controller/controller');
route.get('/', homeRoutes);
route.get('/add-user', addUser);
route.get('/update-user', updateUser);

//API handling
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);

module.exports = route;
