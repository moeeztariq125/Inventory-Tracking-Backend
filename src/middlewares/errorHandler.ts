import {  NextFunction, Request, Response } from "express";
import ApiError from "../abstractions/ApiErrors";
import {INTERNAL}

function errorHandler(
    req:Request,
    res:Response,
    err:ApiError,
    next:NextFunction){
        if(!err)next()
        const status:number = err.status ?? 
}