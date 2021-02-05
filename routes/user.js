const express = require('express');
const route = express.Router();
const routeUser = require('../controllers/authUser')

route.get(['/admin','/login','/signup'],routeUser.getDashboard);
route.post('/register',routeUser.registerUser);
route.post('/login',routeUser.loginUser);
route.post('/checkuser',routeUser.getUser);
route.get('/logout',routeUser.logout);
route.post('/checkemail',routeUser.getEmail);
route.get('/',routeUser.getSession);
module.exports = route;