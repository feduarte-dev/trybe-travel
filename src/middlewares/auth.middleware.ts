import { NextFunction, Request, Response } from 'express';
import jwtUtil from '../utils/jwt.util';
import UserModel from '../database/models/User.model';

const extractToken = (authorization:string) => authorization.split(' ')[1];

const auth = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'Token não encontrado' });
  }

  const token = extractToken(authorization);
  try {
    const decoded = await jwtUtil.verify(token);
    const user = await UserModel.findOne({ where: { email: decoded.email } });
    if (!user) {
      return res.status(401).json({ message: 'Token inválido ou expirado' });
    }
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token inválido' });
  }
};

export default auth;