import BaseRepository from "./Base.repo";
import { IUserModelAttrs, User } from "../db";

class UserRepository extends BaseRepository<IUserModelAttrs>{
    constructor(){
        super(User)
    }
}

export default UserRepository