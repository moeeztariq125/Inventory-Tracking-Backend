import { DataTypes, Model } from "sequelize";
import db from "../database";
import { IInventoryAttrs } from "../../shared/interfaces";

class Inventory extends Model<IInventoryAttrs> {
  declare id: string;
  declare Name: string;
  declare Description: string;
  declare Quantity: number;
}

(async () => {
  const connection = await db.getConnection();
  Inventory.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
      },
      Name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      Description: {
        type: DataTypes.STRING,
        allowNull: false
      },
      Quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      }
    },
    {
      sequelize: connection,
      tableName: "Inventory",
      timestamps: true,
      paranoid: true
    }
  );
  await Inventory.sync();
})();

export default Inventory;
