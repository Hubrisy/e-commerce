import { emailValidation, validatePhoneNumber } from '../validation';

describe('utils/validation emailValidation', () => {
  test('should return true for valid email', () => {
    const actualResult = emailValidation('test@test.com');
    const expectedResult = true;
    expect(actualResult).toBe(expectedResult);
  });

  test('should return false for invalid email #1', () => {
    const actualResult = emailValidation('test');
    const expectedResult = false;
    expect(actualResult).toBe(expectedResult);
  });

  test('should return false for invalid email #2', () => {
    const actualResult = emailValidation('test@test');
    const expectedResult = false;
    expect(actualResult).toBe(expectedResult);
  });

  test('should return false for invalid email #3', () => {
    const actualResult = emailValidation('test@test.');
    const expectedResult = false;
    expect(actualResult).toBe(expectedResult);
  });
});

describe('/utils/validation validatePhoneNumber', () => {
  test('should return false for invalid phone number #1', () => {
    const actualResult = validatePhoneNumber('380666666666666');
    const expectedResult = false;
    expect(actualResult).toBe(expectedResult);
  });
  test('should return false for invalid phone number #2', () => {
    const actualResult = validatePhoneNumber('06667');
    const expectedResult = false;
    expect(actualResult).toBe(expectedResult);
  });
  test('should return false for invalid phone number #3', () => {
    const actualResult = validatePhoneNumber('380666666666');
    const expectedResult = false;
    expect(actualResult).toBe(expectedResult);
  });
  test('should return false for invalid phone number #4', () => {
    const actualResult = validatePhoneNumber('test');
    const expectedResult = false;
    expect(actualResult).toBe(expectedResult);
  });
});
