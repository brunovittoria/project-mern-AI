import { body } from "express-validator";
const signupValidator = [
    body("name").notEmpty().withMessage("Name is required")
];
//# sourceMappingURL=validators.js.map