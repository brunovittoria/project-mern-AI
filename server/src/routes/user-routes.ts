import { Router } from "express";
import { getAllUsers, userSignup } from "../controllers/user-controllers.js";

const userRoutes = Router();

userRoutes.get("/", getAllUsers) //Para cuidar dessa REQ iremos chamar um controller que pega todos USERS do DB
userRoutes.post("/signup", userSignup )

export default userRoutes;