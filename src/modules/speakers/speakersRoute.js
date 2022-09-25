import {Router} from 'express'
import speakersController from './speakersController.js';
const route = Router();


route.get('/',async (req,res)=>{
    return res.json(await speakersController.listAll(req.query));
})
route.delete('/:id',async (req,res)=>{
    const result = await speakersController.remove({"_id":req.params.id})
    if(result.deletedCount) res.status(204).send();
    return res.status(400).send();
})
route.post('/',async (req,res)=>{
    const result = await speakersController.insert(req.body)
    if(result.insertedId) res.status(201).send();
    return res.status(400).send();
})
route.put('/:id',async (req,res)=>{
    const result = await speakersController.update({"_id":req.params.id},req.body)
    if(result.modifiedCount) return res.status(201).send();
    return res.status(400).send();
})

export default route;