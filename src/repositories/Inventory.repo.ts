import { IInventoryAttrs } from "../shared/interfaces";
import {  Inventory } from "../db";
import BaseRepository from "./Base.repo";
import { Model } from 'sequelize'


class InventoryRepository extends BaseRepository<Model<IInventoryAttrs>>{
    constructor(){
        super(Inventory)
    }
}

export default InventoryRepository