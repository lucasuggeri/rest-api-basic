import updateProductService from "../../service/insertProductService.js";
export default async (dadosDoProduto) => {
  return await updateProductService(dadosDoProduto);
};
