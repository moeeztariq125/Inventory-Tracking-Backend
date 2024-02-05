import {  ValidationChain, body } from "express-validator";
import { AGE_LIMIT } from "../../shared/constants";

export default class authValidator{
    public static check():ValidationChain[]{
        return [
            body('email').isEmail().withMessage('Please enter a valid Email').bail()
        ]
    }
    public static signUp():ValidationChain[]{
        return [
            body('email').isEmail().withMessage('Please enter a valid Email').bail(),
            body('firstName').isString().notEmpty().withMessage('Please Enter your First Name').bail(),
            body('lastName').isString().notEmpty().withMessage('Please Enter your Last Name').bail(),
            body('dob').isDate().withMessage('Please Enter your Date of Birth').bail(),
            body('nickname').isString().withMessage('Please Enter a Nickname').bail(),
            body('password').isStrongPassword().withMessage('Please Enter a Strong Password'),
            body('confirmPassword').customSanitizer((value,{req})=>{
                if(value !==req.body.password){
                    throw new Error('Passwords do not match')
                }
                return true
            })
        ]
    }
}