import { composeValidators, SimpleValidator } from '@wildberries/validators';

const simpleValidator = new SimpleValidator();

type ValidatorReturnsType = (
  value?: string | number | any[] | Record<string, any> | undefined,
) => string;

export type formValidationsType = {
  name: ValidatorReturnsType;
  description: ValidatorReturnsType;
};

export const CONTACTS_VALIDATIONS: formValidationsType = {
  name: composeValidators([
    simpleValidator.requiredValidator('name required'),
    simpleValidator.minLenghtValidate(2, 'name min error length'),
    simpleValidator.maxLenghtValidate(20, 'name max error length'),
  ]),
  description: composeValidators([
    simpleValidator.requiredValidator('description required'),
    simpleValidator.minLenghtValidate(1, 'description min error length'),
    simpleValidator.maxLenghtValidate(150, 'description max error length'),
  ]),
};
