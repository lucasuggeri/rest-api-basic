import estoqueModel from '../../app/models/estoqueModel.js';
import InsertProductOperation from '../../app/operations/estoque/InsertProductOperation.js';
export default {
    insert: async (req, res) => {
        const result = await InsertProductOperation(req.body).catch((err)=>{
            res.status(400).send(err)
        });
        res.status(201).send(result);
    },

    list: async (req, res) => {
        const {
            query
        } = req;
        let search = {}
        if (query) {
            search = query;
            if (query.produtoId) search._id = query.produtoId;
            delete search.produtoId;
        }
        return res.json(await estoqueModel.findAll(search));
    },

    remove: async (req, res) => {
        const result = await estoqueModel.remove({
            "_id": req.params.id
        })
        if (result.deletedCount) return res.status(204).send();
        return res.status(400).send();
    },
    
    update: async (req, res) => {
        const target = {
            "_id": req.params.id
        }
        const newData = req.body
        const result = await estoqueModel.update(target, newData)
        if (result.modifiedCount) {
            const [inserted] = await estoqueModel.findAll(target)
            return res.status(200).send(inserted)
        };
        return res.status(400).send();
    }
}