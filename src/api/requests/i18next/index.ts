import { PureRestRequest } from '@mihanizm56/fetch-api';
import Joi from 'joi';

type ParamsType = {
  endpoint: string;
};

const REQUEST_TIMEOUT = 30000;

export const i18nextRequest = ({ endpoint }: ParamsType) =>
  new PureRestRequest().getRequest({
    extraValidationCallback: () => true,
    endpoint,
    parseType: 'json',
    customTimeout: REQUEST_TIMEOUT,
    responseSchema: Joi.object({
      translate: Joi.object(),
    }),
    isErrorTextStraightToOutput: true,
    retry: 3,
  });
