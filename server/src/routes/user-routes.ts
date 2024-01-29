import { Router } from "express";
import { getAllUsers, userSignup, userLogin } from "../controllers/user-controllers.js";
import { signupValidator, validate, loginValidator} from "../utils/validators.js"

const userRoutes = Router();

userRoutes.get("/", getAllUsers) //Para cuidar dessa REQ iremos chamar um controller que pega todos USERS do DB
userRoutes.post("/signup", validate(signupValidator), userSignup ) //Passamos o middleware validate com a funçao que valida o SIGNUP
userRoutes.post("/login", validate(loginValidator), userLogin ) //Passamos o middleware validate com a funçao que valida o LOGIN e o CONTROLLER (userLogin) com os PADROES DA REQ
userRoutes.get("/auth-status", userLogin) //Sera um rota que usara um middleware que faz a verificaçao do token.

export default userRoutes;