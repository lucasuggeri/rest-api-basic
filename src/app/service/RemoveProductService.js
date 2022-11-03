import estoqueModel from "../models/estoqueModel.js";

export default async (dadosDoProduto) => {
  const produto = await estoqueModel.find(dadosDoProduto);

  const produtoNaoEncontrado = !produto.search._id;

  if (produtoNaoEncontrado) throw new TypeError("Produto não encontrado");

  const result = await estoqueModel.remove({
    _id: produto.search._id,
  });

  const produtoDeletado = result.deletedCount;

  if (!produtoDeletado)
    throw new TypeError("Não foi possível deletar o produto!");

  return true;
};
