import { NextFunction, Request, Response } from "express"
import { ValidationChain, body, validationResult } from "express-validator"

//os middlewares são funções que podem ser usadas em várias partes do aplicativo para realizar ações intermediárias antes da ROTA ser executada de fato

//Esta função recebe uma array de validações (validations), que são instâncias de ValidationChain do express-validator. Ela retorna uma função assíncrona que será usada como middleware no Express. Dentro dessa função, um loop percorre todas as validações e executa cada uma usando validation.run(req). Se alguma validação falhar (ou seja, result não está vazio), o loop é interrompido. Isso indica que houve uma falha na validação, e o próximo middleware não será chamado.

export const validate = (validations: ValidationChain[]) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        for (let validation of validations) {
            const result = await validation.run(req)
            if(!result.isEmpty()) {
                break
            }
        }
        const errors = validationResult(req) //validationResult é uma função fornecida pela biblioteca express-validator que verifica se houve alguma falha nas validações anteriores.
        if(errors.isEmpty()) {   //Se nao tiver nenhum erro passa para o proximo middleware.
            return next() 
        }
        return res.status(422).json({ errors: errors.array() })
    }
}


export const loginValidator = [  //This is our first VALIDATOR FUNCTION
    body("email").trim().isEmail().withMessage("Email is required"),
    body("password").trim().isLength({ min: 6 }).withMessage("Password should contain at least 6 characters"),
]

//Aqui, um array chamado signupValidator contém três validações para os campos name, email, e password. Cada uma dessas validações é criada usando a função body do express-validator, encadeando métodos para especificar as regras de validação.
export const signupValidator = [  //This is our first VALIDATOR FUNCTION
    body("name").notEmpty().withMessage("Name is required"),
    ...loginValidator, //Usamos o spread para pegar as C.L do email e PWD do loginvalidator sem escrever tudo dnv
]

export const chatCompletionValidator = [
    body("message").notEmpty().withMessage("Message is required")
]


