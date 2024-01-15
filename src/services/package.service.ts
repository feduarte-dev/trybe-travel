import { ServiceResponse } from '../types/ServiceResponse';
import { Package } from '../types/Package';
import PackageModel from '../database/models/Package.model';

async function getPackageById(id: number): Promise<ServiceResponse<Package>> {
  const foundPackage = await PackageModel.findByPk(id);
  
  if (!foundPackage) { 
    return { status: 404, data: { message: 'Pacote não encontrado!' } };
  } 
  
  return { status: 200, data: foundPackage.dataValues };
}

const updatePackage = async (id: number, pack: Package) => {
  const { destination, category, price } = pack;
  
  await PackageModel.update(
    { destination, category, price },
    { returning: true, where: { id } },
  );

  const newPackage = await getPackageById(id);
  return { status: newPackage.status, data: newPackage.data };
};

export default {
  updatePackage,
  getPackageById,
};
