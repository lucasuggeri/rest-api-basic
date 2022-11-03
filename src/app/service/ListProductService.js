import estoqueModel from "../models/estoqueModel.js";

export default async ({ id }) => {
  console.log(id);
  const target = {
    _id: id,
  };

  const result = await estoqueModel.findAll(target._id);

  const produtoNaoExiste = !result;

  if (produtoNaoExiste) throw new TypeError("Produto não encontrado!");

  return result;
};
