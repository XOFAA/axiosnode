const express=require('express')
const routes = express.Router();
const controllers = require('../controllers/indexControllers')


routes.get('/',controllers.buscarCep)
routes.post('/',controllers.buscarCep)


module.exports = routes;