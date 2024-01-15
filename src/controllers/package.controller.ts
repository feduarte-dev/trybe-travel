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

export default {
  updatePackage,
  getPackageById,
};

// const updatePost = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { authorization } = req.headers;
//     const { title, content } = req.body;
//     const { userId } = await getUserFromToken(authorization);
//     const { status, data } = await postTransformService.updatePost(id, title, content, userId);
//     return res.status(status).json(data);
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
// };