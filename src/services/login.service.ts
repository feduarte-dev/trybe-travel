import UserModel from '../database/models/User.model';
import { ServiceResponse } from '../types/ServiceResponse';
import jwtUtil from '../utils/jwt.util';

 type User = {
   email: string,
   password: string,
 };

 type Token = { token: string };

const verifyLogin = async (login: User):Promise<ServiceResponse<Token>> => {
  const user = await UserModel.findOne({ where: { email: login.email } });
  if (!user) {
    return { status: 400, data: { message: 'Dados inválidos!' } };
  }

  const { email } = user.dataValues;

  const token = jwtUtil.sign({ email });
  return { status: 200, data: { token } };
};

export default {
  verifyLogin,
};