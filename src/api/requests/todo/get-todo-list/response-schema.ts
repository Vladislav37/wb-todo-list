import Joi from 'joi';

export const responseSchema = Joi.array().items(
  Joi.object({
    id: Joi.string().required(),
    name: Joi.string().required(),
    description: Joi.string().required(),
  }),
);
