import User from "../models/User.js";
import { hash } from "bcrypt"; //Importamos para antes de passar a PWD pro DB encriptar a PWD
export const getAllUsers = async (req, res, next) => {
    try {
        //Try to get all users from DB
        const users = await User.find();
        return res.status(200).json({ message: "OK", users });
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({ message: "ERROR", cause: error.message });
    }
};
export const userSignup = async (req, res, next) => {
    try {
        //User SIGNUP
        const { name, email, password } = req.body; //Fazemos o desconstructuring dos dados ENVIADOS do USER no FRONT
        const hashedPassword = await hash(password, 10); //Encryptamos a PWD antes de criar USER no DB
        const user = new User({ name, email, password: hashedPassword });
        await user.save(); //Salvamos o USER no DB
        return res.status(200).json({ message: "OK", id: user._id.toString() }); //Passamos o ID do user para o FRONT em STRING, pois por default o id é um OBJECT
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({ message: "ERROR", cause: error.message });
    }
};
//# sourceMappingURL=user-controllers.js.map