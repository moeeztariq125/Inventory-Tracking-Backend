import { IInventoryAttrs } from "../shared/interfaces";
import {  Inventory } from "../db";
import BaseRepository from "./Base.repo";


class InventoryRepository extends BaseRepository<IInventoryAttrs>{
    constructor(){
        super(Inventory)
    }
}

export default InventoryRepository