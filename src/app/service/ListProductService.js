import estoqueModel from "../models/estoqueModel.js";

export default async (dadosDoProduto) => {
  const result = await estoqueModel.findAll(dadosDoProduto);

  const produtoNaoExiste = !result.search._id;

  if (produtoNaoExiste) throw new TypeError("Produto não encontrado!");

  const [inserted] = await estoqueModel.findAll({
    _id: result.insertedId,
  });

  return inserted;
};
