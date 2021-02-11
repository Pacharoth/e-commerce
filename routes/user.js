const express = require('express');
const route = express.Router();
const routeUser = require('../controllers/authUser')

route.get(['/admin','/login','/signup','/'],routeUser.getDashboard);
route.post('/register',routeUser.registerUser);
route.post('/login',routeUser.loginUser);
route.post('/checkuser',routeUser.getUser);
route.get('/logout',routeUser.logout);
route.post('/checkemail',routeUser.getEmail);
route.post('/session',routeUser.getSession);

route.post('/comment',routeUser.postComment);
route.get('/comment',routeUser.getComment);

module.exports = route;