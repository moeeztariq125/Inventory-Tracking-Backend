import { Model, DataTypes } from 'sequelize';
import db from '../database'; // Import the database module

export interface IUserModelAttrs {
  userID: string;
  firstName: string;
  lastName: string;
  dob: string;
  role: string;
  profilePicture: string;
}

class User extends Model<IUserModelAttrs> {
  declare userID: string;
  declare firstName: string;
  declare lastName: string;
  declare dob: string;
  declare role: string;
  declare profilePicture: string;
}
(async () => {
  const connection = await db.getConnection();
  User.init(
    {
      userID: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
      },
      firstName: {
        type: DataTypes.STRING,
      },
      lastName: {
        type: DataTypes.STRING,
      },
      dob: {
        type: DataTypes.STRING,
      },
      role: {
        type: DataTypes.STRING,
      },
      profilePicture: {
        type: DataTypes.STRING,
      },
    },
    {
        tableName:"Users",
        sequelize: connection,
        timestamps: true,
        paranoid: true
    }
  );
})();

export default User;
