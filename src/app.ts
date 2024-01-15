import express, { Request, Response } from 'express';
import packagesRouter from './routers/package.router';
import LoginRouter from './routers/login.router';
import auth from './middlewares/auth.middleware';

const app = express();

app.use(express.json());
app.use(LoginRouter);
app.use(auth);
app.use(packagesRouter);
app.get('/', (_req: Request, res: Response) => {
  res.status(200).send('Aplicação está funcionando!');
});

export default app;
