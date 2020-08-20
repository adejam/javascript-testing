const calcObj = require('./calcobj');

test('calcObj object exists', () => {
  expect(calcObj).toBeDefined();
});

test('calcObj object calculator works on summation', () => {
  expect(calcObj.sum(12, 10)).toBe(22);
});

test('calcObj object calculator works on subtraction', () => {
  expect(calcObj.subtract(12, 10)).toBe(2);
});

test('calcObj object calculator works on multiplication', () => {
  expect(calcObj.multiply(12, 10)).toBe(120);
});

test('calcObj object calculator works on division', () => {
  expect(calcObj.divide(12, 6)).toBe(2);
});
