import { Router } from "express";
import { getAllUsers, userSignup } from "../controllers/user-controllers.js";
import { signupValidator, validate } from "../utils/validators.js";
const userRoutes = Router();
userRoutes.get("/", getAllUsers); //Para cuidar dessa REQ iremos chamar um controller que pega todos USERS do DB
userRoutes.post("/signup", validate(signupValidator), userSignup); //Passamos o middleware validate com a funçao que valida o SIGNUP
export default userRoutes;
//# sourceMappingURL=user-routes.js.map