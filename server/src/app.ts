import  express  from "express";
import {config} from "dotenv";
import morgan from "morgan"
import appRouter from "./routes/index.js";

config()
const app = express()

//Middlewares
app.use(express.json())

//Remove it in PRODUCTION
app.use(morgan("dev"))

//Passando para nossa rota principal o MIDDLEWARE appRouter para a gestao das varias rotas
app.use("/api/v1", appRouter)

export default app