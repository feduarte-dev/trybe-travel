import { Router } from 'express'; 
import userController from '../controllers/user.controller';

const usersRouter = Router();

usersRouter.get('/users', userController.getAllUsers);

export default usersRouter;