const fizzBuzz = require('./fizzbuzz');

describe('fizzBuzz', () => {
  it('returns fizz if number is divisible by 3', () => {
    expect(fizzBuzz(9)).toBe('Fizz');
  });
  it('returns buzz if number is divisible by 5', () => {
    expect(fizzBuzz(10)).toBe('Buzz');
  });
  it('returns fizzbuzz if number is divisible by 3 and 5', () => {
    expect(fizzBuzz(15)).toBe('Fizzbuzz');
  });
});