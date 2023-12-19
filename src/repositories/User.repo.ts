import BaseRepository from "./Base.repo";
import { User } from "../db";
import { IUserModelAttrs } from "../shared/interfaces";

class UserRepository extends BaseRepository<IUserModelAttrs>{
    constructor(){
        super(User)
    }
}

export default UserRepository