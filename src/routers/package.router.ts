import { Router } from 'express';
import packageController from '../controllers/package.controller';

const packagesRouter = Router();

packagesRouter.patch('/packages/:id', packageController.updatePackage);
packagesRouter.get('/packages/:id', packageController.getPackageById);
export default packagesRouter;