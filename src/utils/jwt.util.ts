import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'secret';

type TokenPayload = {
  email: string
};

const sign = (payload: TokenPayload): string => {
  const token = jwt.sign(payload, secret);
  return token;
};

export default {
  sign,
};