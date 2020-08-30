const { Router } = require("express");
const register = require("../controller/register");

const todoRouter = Router();

todoRouter.route("/register").post(register);

module.exports = todoRouter;
