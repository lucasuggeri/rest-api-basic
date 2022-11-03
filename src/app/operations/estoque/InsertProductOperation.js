import insertProductService from "../../service/InsertProductService.js";
export default async (dadosDoProduto) => {
  return await insertProductService(dadosDoProduto);
};
