const { Router } = require("express");
const routes = Router();

const authControllers = require('../../Controllers/auth-controllers');
const userVerification = require('../../Middlewares/access.token');


routes.post("/signUp", authControllers.createUser);
routes.post("/login", authControllers.user_login);
routes.delete("/:userId", userVerification, authControllers.user_delete)

module.exports = routes;
