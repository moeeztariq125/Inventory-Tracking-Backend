import { Request, Response } from "express"
import { usersServiceClass } from "../services"

class userControllerClass {
    private usersService:usersServiceClass
    constructor(usersService:usersServiceClass){
        console.log('inside constructor')
        this.usersService = usersService;
        console.log(this.usersService.checkUser)
    }
    getUser = async(req:Request,res:Response) => {
        res.send('user details')
    }
    updateUser =  async(req:Request,res:Response) => {
        res.send('user updated')
    }
    createUser =  async(req:Request,res:Response) => {
        res.send('user Created')
    }
    deleteUser =  async(req:Request,res:Response) => {
        res.send('user deleted')
    }
    check =  async(req:Request, res:Response) => {
        try{
            const {email} = req.body;
            const exists = await this.usersService.checkUser(email)
            if(exists)res.redirect('/sign-in')
            else res.redirect('/sign-up')
        }catch(err:any){
            console.log('ye to error hogya',err.message)
        }
    }
    signUp =  async(req:Request, res:Response) => {
        res.send('sign up')
    }
}

export default userControllerClass