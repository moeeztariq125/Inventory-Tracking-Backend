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
        res.send('in check')
    }
}

export default userControllerClass