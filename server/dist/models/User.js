import mongoose from "mongoose";
import { randomUUID } from "crypto"; //Sera Gerado um ID aleatorio para cada USUARIO em nosso chat
const chatSchema = new mongoose.Schema({
    id: {
        type: String,
        default: randomUUID(),
    },
    role: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
});
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        unique: true,
    },
    chats: [chatSchema] //Isso é feito para representar uma relação entre usuários e chats. Cada usuário pode ter vários chats, e cada chat segue a estrutura definida no chatSchema.
});
export default mongoose.model("User", userSchema);
//# sourceMappingURL=User.js.map