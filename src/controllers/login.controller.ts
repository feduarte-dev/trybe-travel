import { Request, Response } from 'express';
import loginService from '../services/login.service';

const login = async (req: Request, res: Response) => {
  const { status, data } = await loginService.verifyLogin(req.body);
  return res.status(status).json(data);
};

export default {
  login,
};