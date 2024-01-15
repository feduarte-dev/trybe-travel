import { DataTypes, ModelDefined, Optional } from 'sequelize';
import { Package } from '../../types/Package';
import db from './index';

export type PackageWithoutId = Optional<Package, 'id'>;
type PackageSequelizeModelCreator = ModelDefined<Package, PackageWithoutId>;

const PackageModel: PackageSequelizeModelCreator = db.define('Package', {
  destination: DataTypes.STRING,
  category: DataTypes.STRING,
  price: DataTypes.DECIMAL,
}, {
  tableName: 'packages',
  timestamps: false,
});

export default PackageModel;