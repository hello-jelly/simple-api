const test = require('../add');

describe('function subtracts two numbers', () => {
  it('subtracts', () => {
    const one = 10;
    const two = 4;
    expect(test.subtract(one, two)).toBe(6);
  });
});