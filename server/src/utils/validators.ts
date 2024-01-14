import { body } from "express-validator"

const signupValidator = [  //This is our first VALIDATOR
    body("name").notEmpty().withMessage("Name is required")
]

