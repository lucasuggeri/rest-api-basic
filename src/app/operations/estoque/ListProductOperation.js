import listProductService from "../../service/insertProductService.js";
export default async (dadosDoProduto) => {
  return await listProductService(dadosDoProduto);
};
