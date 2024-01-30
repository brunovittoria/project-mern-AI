import { NextFunction, Response, Request } from "express";
import jwt from "jsonwebtoken";
import { COOKIE_NAME } from "./constants.js";


// Função para criar um token JWT com base no ID e e-mail do usuário
export const createToken = (id: string, email: string, expiresIn) => {
    // Cria um objeto payload(refere-se à parte do token que contém as informações do usuário)
    const payload = { id, email };
    // Gera o token JWT usando a função sign da biblioteca jsonwebtoken
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        // Define a expiração do token mas deixa o valor de tempo a ser definido para o userController 
        expiresIn,
    });
    // Retorna o token gerado
    return token;
};

export const verifyToken = async (res: Response, req: Request, next: NextFunction) => {
    const token =  req.signedCookies[`${COOKIE_NAME}`]

    if(!token || token.trim() === ""){
        return res.status(401).json({ message: "Token not found" })
    }

    return  new Promise <void>((resolve, reject) => { 
        return jwt.verify(token, process.env.JWT_SECRET, (err, success) => {
            if (err) {
                reject(err.message)
                return res.status(401).json({ message: "Token Expired" })
            } else{
                resolve()
                res.locals.jwtData = success
                return next()
            }
        })
    })
}