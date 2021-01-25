const express = require('express');
const route = express.Router();
const routeUser = require('../controllers/authUser')

route.get('/',routeUser.getDashboard);
module.exports = route;