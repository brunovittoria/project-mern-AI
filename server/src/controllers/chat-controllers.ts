import { Request, Response, NextFunction } from "express";


export const generateChatCompletion = async (req: Request, res: Response, next: NextFunction) => {
    //Getting the message from the user.
    const { message } = req.body
}  