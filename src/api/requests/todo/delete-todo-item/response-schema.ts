import Joi from 'joi';

export const responseSchema = Joi.object({
  id: Joi.string().required(),
});
