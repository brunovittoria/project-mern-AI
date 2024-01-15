import { NextFunction, Request, Response } from "express"
import  User from "../models/User.js"
import { hash, compare } from "bcrypt" //Importamos para antes de passar a PWD pro DB encriptar a PWD

//controllers são responsáveis por manipular a lógica específica de uma rota ou recurso.

export const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {  
    try {
        //Try to get all users from DB
        const users = await User.find()
        return res.status(200).json({ message: "OK", users})
    } catch(error) {
        console.log(error)
        return res.status(400).json({ message: "ERROR", cause: error.message })
    }
}

export const userSignup = async (req: Request, res: Response, next: NextFunction) => {  
    try {
        //User SIGNUP
        const { name, email, password } = req.body //Fazemos o desconstructuring dos dados ENVIADOS do USER no FRONT
        const existingUser = await User.findOne({ email })
        if(existingUser) return res.status(401).send("User already registered") //Se ja existir ira para por aqui

        const hashedPassword = await hash(password, 10) //Encryptamos a PWD antes de criar USER no DB
        const user = new User({name, email, password: hashedPassword})
        await user.save() //Salvamos o USER no DB
        return res.status(200).json({ message: "OK", id: user._id.toString()}) //Passamos o ID do user para o FRONT em STRING, pois por default o id é um OBJECT
    } catch(error) {
        console.log(error)
        return res.status(400).json({ message: "ERROR", cause: error.message })
    }
}

export const userLogin = async (req: Request, res: Response, next: NextFunction) => {  
    try {
        //User LOGIN
        const { email, password } = req.body //Fazemos o desconstructuring dos dados ENVIADOS do USER no FRONT
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(401).send("User not registered")
        }

        const isPasswordCorrect = await compare(password, user.password) //Usamos o compare do BCRYPT pra comparar senha enviada com a senha real do USER no DB
        if(!isPasswordCorrect) {
            return res.status(403).send("Incorrect Password")
        }

        return res.status(200).json({ message: "OK", id: user._id.toString()}) //Passamos o ID do user para o FRONT em STRING, pois por default o id é um OBJECT
    } catch(error) {
        console.log(error)
        return res.status(400).json({ message: "ERROR", cause: error.message })
    }
}

