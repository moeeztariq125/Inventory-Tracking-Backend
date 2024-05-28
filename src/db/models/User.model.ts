import { Model, DataTypes } from "sequelize";
import db from "../database"; // Import the database module
import { IUserModelAttrs, signUpStatus } from "../../shared/interfaces";

class User extends Model<IUserModelAttrs> {
  declare userID: string;
  declare firstName: string;
  declare lastName: string;
  declare dob: Date;
  declare role: string;
  declare profilePicture: string;
  declare email: string;
  declare otp: string;
  declare signupStatus: signUpStatus;
}
(async () => {
  const connection = await db.getConnection();
  User.init(
    {
      userID: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4
      },
      firstName: {
        type: DataTypes.STRING
      },
      lastName: {
        type: DataTypes.STRING
      },
      dob: {
        type: DataTypes.STRING
      },
      role: {
        type: DataTypes.STRING
      },
      profilePicture: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING
      },
      otp: {
        type: DataTypes.STRING
      },
      signupStatus: {
        type: DataTypes.ENUM,
        values: Object.values(signUpStatus)
      }
    },
    {
      tableName: "Users",
      sequelize: connection,
      timestamps: true,
      paranoid: true
    }
  );
  await User.sync();
})();

export default User;
