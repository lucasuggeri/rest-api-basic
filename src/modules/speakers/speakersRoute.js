import {
    Router
} from 'express'
import {
    celebrate,
    Joi,
    Segments
} from 'celebrate';
import speakersController from './speakersController.js';
const route = Router();

/**
 * @openapi
 * /speakers:
 *   get:
 *     tags:
 *       - speakers
 *     summary: List one or more speakers
 *     description: Return list of Speakers
 *     operationId: listAll
 *     parameters:
 *     - in: query
 *       name: speakerId
 *       description: ID of speaker order that needs to be deleted
 *       schema:
 *         type: string
 *         format: guid
 *     - in: query
 *       name: nickname
 *       description: ID of speaker order that needs to be deleted
 *       schema:
 *         type: string    
 *     responses:
 *       '200':
 *         description: successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 properties:
 *                   _id:
 *                     type: string
 *                     format: guid
 *                     example: aeb9b96e-63d9-4bf9-8a37-9d954571e444
 *                   nickname:
 *                     type: string
 *                     example: Juninho
 *       '400':
 *         description:  unsuccessful operation
 */
route.get('/', celebrate({
    [Segments.QUERY]: {
        nickname: Joi.string(),
        speakerId: Joi.string(),
    },
}), speakersController.list)
/**
 * @openapi
 * /speakers/{speakerId}:
 *   delete:
 *     tags:
 *       - speakers
 *     summary: Delete one speaker by Id
 *     description: Delete speaker by Id
 *     operationId: delete
 *     parameters:
 *       - name: speakerId
 *         in: path
 *         description: ID of speaker order that needs to be deleted
 *         required: true
 *         schema:
 *           type: string
 *           format: guid
 *     responses:
 *       '204':
 *         description: Delete with succesful doesnt return any response
 *       '400':
 *         description: Any other error of the user
 */
route.delete('/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().guid().required(),
        },
    }),
    speakersController.remove)
/**
 * @openapi
 * /speakers:
 *   post:
 *     tags:
 *       - speakers
 *     summary: Insert one Speaker
 *     description: Insert one Speaker
 *     operationId: insert
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             example:
 *               nickname: Juninho
 *     responses:
 *       '201':
 *         description: successful operation
 *         content:
 *           application/json:
 *             schema:
 *               properties:
 *                 _id:
 *                   type: string
 *                   format: guid
 *                   example: aeb9b96e-63d9-4bf9-8a37-9d954571e444
 *                 nickname:
 *                   type: string
 *                   example: Juninho
 */
route.post('/',
    celebrate({
        [Segments.BODY]: {
            nickname: Joi.string().required(),
        },
    }), speakersController.insert)
/**
 * @openapi
 * /speakers/{speakerId}:
 *   put:
 *     tags:
 *       - speakers
 *     summary: Update one speaker by id
 *     description: Update one speaker by id
 *     operationId: update
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             example:
 *               nickname: Juninho
 *     parameters:
 *       - name: speakerId
 *         in: path
 *         description: ID of the speaker that needs to be updated
 *         required: true
 *         schema:
 *           type: string
 *           format: guid
 *     responses:
 *       '200':
 *         description: successful operation
 *         content:
 *           application/json:
 *             schema:
 *               properties:
 *                 _id:
 *                   type: string
 *                   format: guid
 *                   example: aeb9b96e-63d9-4bf9-8a37-9d954571e444
 *                 nickname:
 *                   type: string
 *                   example: Juninho    
 *       '400':
 *         description: any other error of the user
 */
route.put('/:id',
celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().guid().required(),
    },
    [Segments.BODY]: {
        nickname: Joi.string().required(),
    }
}), speakersController.update)

export default route;