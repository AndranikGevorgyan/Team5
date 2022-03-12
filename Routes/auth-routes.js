const { Router } = require("express");
const routes = Router();
const authControllers = require('../Controllers/auth-controllers')

routes.post("/registration", authControllers.createUser)

module.exports = routes;
