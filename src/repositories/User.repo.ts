import BaseRepository from "./Base.repo";
import { User } from "../db";
import { IUserModelAttrs } from "../shared/interfaces";
import { Model } from 'sequelize'

class UserRepository extends BaseRepository<Model<IUserModelAttrs>>{
    constructor(){
        super(User)
    }
}

export default UserRepository