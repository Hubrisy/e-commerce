import { emailValidation } from '../validation';

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
