import {DataTypes, Model} from 'sequelize';
import db from '../database';
import { IInventoryAttrs } from '../../shared/interfaces';



class Inventory extends Model<IInventoryAttrs> {
    declare id: Number;
    declare Name: String;
    declare Description: String;
    declare Quantity: String;
}

(async()=>{
    const connection = await db.getConnection()
    Inventory.init({
        id:{
            type:DataTypes.NUMBER,
            autoIncrement:true,
            primaryKey:true,
            unique:true
        },
        Name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        Description:{
            type:DataTypes.STRING,
            allowNull:false
        },
        Quantity:{
            type:DataTypes.NUMBER,
            allowNull:false,
            defaultValue:0
        }
    },{
        sequelize:connection,
        tableName:"Inventory",
        timestamps:true,
        paranoid:true
    })
})();

export default Inventory;