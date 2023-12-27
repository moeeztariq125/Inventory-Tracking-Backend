import { Request, Response } from "express"

class userControllerClass {
    constructor(){

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
}

const userController = new userControllerClass()
export default userController