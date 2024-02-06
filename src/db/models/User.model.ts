import { Model, DataTypes } from 'sequelize';
import db from '../database'; // Import the database module
import { IUserModelAttrs } from '../../shared/interfaces';



class User extends Model<IUserModelAttrs> {
  declare userID: string;
  declare firstName: string;
  declare lastName: string;
  declare dob: Date ;
  declare role: string;
  declare profilePicture: string;
  declare email:string;
  declare otp:string;
  declare signupStatus:boolean
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
      email: {
        type: DataTypes.STRING
      },
      otp: {
        type: DataTypes.STRING
      },
      signupStatus:{
        type: DataTypes.STRING
      }
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
