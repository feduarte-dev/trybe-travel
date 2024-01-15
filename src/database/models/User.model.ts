import { DataTypes, ModelDefined, Optional, Model } from 'sequelize';
import { User } from '../../types/User';
import db from './index';

export type UserWithoutId = Optional<User, 'id'>;
type UserSequelizeModelCreator = ModelDefined<User, UserWithoutId>;

export type UserSequelizeModel = Model<User, UserWithoutId>;

const UserModel: UserSequelizeModelCreator = db.define('User', {
  email: DataTypes.STRING,
  password: DataTypes.STRING,
}, {
  tableName: 'users',
  timestamps: false,
});

export default UserModel;