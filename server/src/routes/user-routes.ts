import { Router } from "express";
import { getAllUsers } from "../controllers/user-controllers.js";

const userRoutes = Router();

userRoutes.get("/", getAllUsers) //Para cuidar dessa REQ iremos chamar um controller

export default userRoutes;