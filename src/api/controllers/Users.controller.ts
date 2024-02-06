import { Request, Response } from "express"
import { usersServiceClass } from "../services"

class userControllerClass {
    private usersService:usersServiceClass
    constructor(usersService:usersServiceClass){
        this.usersService = usersService;
    }
    async getUser(req:Request,res:Response){
        res.send('user details')
    }
    async updateUser(req:Request,res:Response){
        res.send('user updated')
    }
    async createUser(req:Request,res:Response){
        res.send('user Created')
    }
    async deleteUser(req:Request,res:Response){
        res.send('user deleted')
    }
    async check(req:Request, res:Response){
        console.log('inside herakjhfkjdsa')
        res.send('in check')
    }
    async signUp(req:Request, res:Response){
        res.send('sign up')
    }
}

export default userControllerClass