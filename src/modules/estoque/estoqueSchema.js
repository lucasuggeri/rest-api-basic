import { celebrate, Joi, Segments } from "celebrate";
export default {
  insert: celebrate({
    [Segments.BODY]: {
      produto: Joi.string().required(),
      quantidade: Joi.number().integer().required(),
    },
  }),
  remove: celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid(),
    },
  }),
  list: celebrate({
    [Segments.QUERY]: {
      produtoId: Joi.string().uuid(),
      produto: Joi.string(),
    },
  }),
  update: celebrate({
    [Segments.BODY]: {
      produto: Joi.string().required(),
      quantidade: Joi.number().integer().required(),
    },
    [Segments.PARAMS]: {
      produtoId: Joi.string().uuid().required(),
    },
  }),
};
