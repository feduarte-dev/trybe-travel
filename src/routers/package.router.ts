import { Router } from 'express';
import packageController from '../controllers/package.controller';

const packagesRouter = Router();
const PACKAGE_PATH = '/packages/:id';

packagesRouter.delete(PACKAGE_PATH, packageController.deletePackage);
packagesRouter.patch(PACKAGE_PATH, packageController.updatePackage);
packagesRouter.get(PACKAGE_PATH, packageController.getPackageById);

export default packagesRouter;