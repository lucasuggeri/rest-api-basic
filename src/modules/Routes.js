import {Router} from 'express'
import cors from 'cors';
import bodyParser from 'body-parser';
import speakerRouter from './speakers/speakersRoute.js';
import swagger from '../config/swaggerMiddleware.js';

const routes = Router();

routes
    .use(cors())
    .use(bodyParser.json())
    .use('/speakers', speakerRouter)
    .use('/api-docs', swagger.serve,swagger.setup);

export default routes;