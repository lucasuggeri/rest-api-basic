import updateProductService from "../../service/UpdateProductService.js";
export default async (id, body) => {
  return await updateProductService(id, body); //mais um parâmetro
};
