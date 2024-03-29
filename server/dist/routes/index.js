import { Router } from "express";
import userRoutes from "./user-routes.js";
import chatRoutes from "./chat-routes.js";
const appRouter = Router();
appRouter.use("/user", userRoutes); //domain/api/v1/user   Dessa forma userRoutes ira cuidar dessa ROTA
appRouter.use("/chats", chatRoutes); //domain/api/v1/chats Dessa forma chatRoutes ira cuidar dessa ROTA
export default appRouter;
//Este file é o arquivo principal da gestao de rotas
//# sourceMappingURL=index.js.map