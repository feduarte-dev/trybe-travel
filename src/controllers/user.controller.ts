import { Request, Response } from 'express';
import userService from '../services/user.service';

const getAllUsers = async (_req: Request, res: Response) => {
  const { status, data } = await userService.getAllUsers();
  return res.status(status).json(data);
};

export default {
  getAllUsers,
};