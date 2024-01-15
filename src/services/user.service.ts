import UserModel, { UserSequelizeModel } from '../database/models/User.model';
import { ServiceResponse } from '../types/ServiceResponse';

const getAllUsers = async ():Promise<ServiceResponse<UserSequelizeModel[]>> => {
  const users = await UserModel.findAll();
  return { status: 200, data: users };
};

export default {
  getAllUsers,
};