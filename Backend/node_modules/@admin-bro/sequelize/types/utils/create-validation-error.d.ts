import { ValidationError } from 'admin-bro';
declare const createValidationError: (originalError: any) => ValidationError;
export default createValidationError;
