import estoqueModel from "../../app/models/estoqueModel.js";
import InsertProductOperation from "../../app/operations/estoque/InsertProductOperation.js";
import ListProductOperation from "../../app/operations/estoque/ListProductOperation.js";
import RemoveProductOperation from "../../app/operations/estoque/RemoveProductOperation.js";
import UpdateProductOperation from "../../app/operations/estoque/UpdateProductOperation.js";
export default {
  insert: async (req, res) => {
    const result = await InsertProductOperation(req.body).catch((err) => {
      res.status(400).send(err);
    });
    res.status(201).send(result);
  },

  list: async (req, res) => {
    const id = req.Query;
    const result = await ListProductOperation({
      id,
    }).catch((err) => {
      res.status(400).send(err);
    });
    res.status(201).send(result);
    /*    const { query } = req;
    let search = {};
    if (query) {
      search = query;
      if (query.produtoId) search._id = query.produtoId;
      delete search.produtoId;
    }*/
  },

  remove: async (req, res) => {
    const result = await RemoveProductOperation(req.params).catch((err) => {
      res.status(400).send(err);
    });
    return res.status(204).send(result);
  },

  update: async (req, res) => {
    const { id } = req.params;
    const { body } = req.body;
    const inserted = await UpdateProductOperation({
      id,
      body,
    }).catch((err) => {
      res.status(400).send(err);
    });
    return res.status(200).send(inserted);
  },
};
