const express = require('express');
const route = express.Router();
const { homeRoutes, addUser, updateUser } = require('./../services/render');

route.get('/', homeRoutes);
route.get('/add-user', addUser);
route.get('/update-user', updateUser);

module.exports = route;
