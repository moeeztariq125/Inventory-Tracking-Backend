import { NextFunction, Request, Response } from "express"
import { ContextRunner, ValidationChain, validationResult } from "express-validator"

export default (validations:ValidationChain[])=>{
    return async(req:Request, res:Response, next:NextFunction)=>{
        for(let validation of validations){
            const result = await validation.run(req)
            if(!result.isEmpty())break;
        }

        const errors = validationResult(req)
        if(errors.isEmpty()){
            return next()
        }
        res.status(400).json({errors:errors.array({onlyFirstError:true})})
    }
}