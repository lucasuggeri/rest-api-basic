import removeProductService from "../../service/RemoveProductService.js";
export default async (dadosDoProduto) => {
  return await removeProductService(dadosDoProduto);
};
