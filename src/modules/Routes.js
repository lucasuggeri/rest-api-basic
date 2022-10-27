import {Router} from 'express'
import cors from 'cors';
import bodyParser from 'body-parser';
import estoqueRouter from './estoque/estoqueRoute.js';
import swagger from '../config/swaggerMiddleware.js';

const routes = Router();

routes
    .use(cors())
    .use(bodyParser.json())
    .use('/estoque', estoqueRouter)
    .use('/api-docs', swagger.serve, swagger.setup);

export default routes;