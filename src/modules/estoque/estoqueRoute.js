import { Router } from 'express'
import estoqueController from './estoqueController.js';
import estoqueSchema from './estoqueSchema.js';
const route = Router();

route.get('/',  estoqueSchema.list, estoqueController.list)

route.delete('/:id', estoqueSchema.remove, estoqueController.remove)

route.post('/',  estoqueSchema.insert, estoqueController.insert)

route.put('/:id',  estoqueSchema.update, estoqueController.update)

export default route;