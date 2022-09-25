import {Router} from 'express'
import cors from 'cors';
import bodyParser from 'body-parser';
import speakerRouter from './speakers/speakersRoute.js';

const routes = Router();

routes
    .use(cors())
    .use(bodyParser.json())
    .use('/speakers', speakerRouter);

export default routes;