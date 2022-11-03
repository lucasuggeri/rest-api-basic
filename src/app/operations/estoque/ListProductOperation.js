import listProductService from "../../service/ListProductService.js";
export default async (id) => {
  return await listProductService(id);
};
