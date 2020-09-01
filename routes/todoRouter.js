const { Router } = require("express");
const register = require("../controller/register");
const login = require("../controller/login");
const validToken = require("../middleware/validToken");
const testToken = require("../controller/testToken");
const loginSchema = require("../constant/loginSchema");
const registerSchema = require("../constant/registerSchema");
const validateUser = require("../middleware/validateUser");

const todoRouter = Router();

todoRouter.route("/register").post(validateUser(registerSchema), register);
todoRouter.route("/login").post(validateUser(loginSchema), login);
todoRouter.route("/test").post(validToken, testToken);

module.exports = todoRouter;
