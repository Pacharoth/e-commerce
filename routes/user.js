const express = require('express');
const route = express.Router();
const routeUser = require('../controllers/authUser')

route.get('/*',routeUser.getDashboard);
route.post('/register',routeUser.registerUser);
route.post('/login',routeUser.loginUser);
route.post('/checkuser',routeUser.getUser);
route.post('/logout',routeUser.logout);
route.post('/checkemail',routeUser.getEmail);
route.post('/session',routeUser.getSession);
module.exports = route;