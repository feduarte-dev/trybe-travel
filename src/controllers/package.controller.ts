import { Request, Response } from 'express';
import packageService from '../services/package.service';

async function getPackageById(req: Request, res: Response) {
  const { id } = req.params;
  const idNumber = Number(id);
  const { status, data } = await packageService.getPackageById(idNumber);
  return res.status(status).json(data);
}

const updatePackage = async (req: Request, res: Response) => {
  const { id } = req.params;
  const idNumber = Number(id);
  const { status, data } = await packageService.updatePackage(idNumber, req.body);
  return res.status(status).json(data);
};

const deletePackage = async (req: Request, res: Response) => {
  const { id } = req.params;
  const idNumber = Number(id);
  const { status, data } = await packageService.deletePackage(idNumber);
  return res.status(status).json(data);
};

export default {
  deletePackage,
  updatePackage,
  getPackageById,
};
