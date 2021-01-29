const express = require('express');
const route = express.Router();
const routeUser = require('../controllers/authUser')

route.get('/*',routeUser.getDashboard);
route.post('/register',routeUser.registerUser);
route.post('/login',routeUser.loginUser);
module.exports = route;