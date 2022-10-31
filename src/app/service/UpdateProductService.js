import estoqueModel from "../models/estoqueModel.js";

export default async (dadosDoProduto) => {
  const result = await estoqueModel.find(dadosDoProduto);

  const produtoRemovido = !result.search._id;

  if (produtoRemovido) throw new TypeError("Produto não encontrado");

  await estoqueModel.update({
    _id: result.search._id,
  });
};
