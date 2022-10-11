import speakersModel from "../../app/models/speakersModel.js";
export default {
  //faz insert no
  insert: async (req, res) => {
    const result = await speakersModel.insert(req.body);
    if (result.insertedId) {
      const [inserted] = await speakersModel.findAll({
        _id: result.insertedId,
      });
      res.status(201).send(inserted);
    }
    return res.status(400).send();
  },
  list: async (req, res) => {
    const { query } = req;
    let search = {};
    if (query) {
      search = query;
      if (query.speakerId) search._id = query.speakerId;
      delete search.speakerId;
    }
    return res.json(await speakersModel.findAll(search));
  },
  remove: async (req, res) => {
    const result = await speakersModel.remove({
      _id: req.params.id,
    });
    if (result.deletedCount) return res.status(204).send();
    return res.status(400).send();
  },
  update: async (req, res) => {
    const target = {
      _id: req.params.id,
    };
    const newData = req.body;
    const result = await speakersModel.update(target, newData);
    if (result.modifiedCount) {
      const [inserted] = await speakersModel.findAll(target);
      return res.status(200).send(inserted);
    }
    return res.status(400).send();
  },
};
