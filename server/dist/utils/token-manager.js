import jwt from "jsonwebtoken";
// Função para criar um token JWT com base no ID e e-mail do usuário
export const createToken = (id, email, expiresIn) => {
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
//# sourceMappingURL=token-manager.js.map