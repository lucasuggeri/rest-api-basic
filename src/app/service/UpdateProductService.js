import estoqueModel from "../models/estoqueModel.js";

export default async ({ id, body }) => {
  //{ id e o body }

  const target = {
    _id: id,
  };
  const produto = await estoqueModel.find(target);
  const newData = body;
  const update = await estoqueModel.update(produto, newData);
  if (update.modifiedCount) {
    const [inserted] = await estoqueModel.findAll(target);
    return inserted;
  }
};
