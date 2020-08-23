const calcObj = require('./calcobj');

test('calcObj object exists', () => {
  expect(calcObj).toBeDefined();
});

test('return type of calcObj is an object', () => {
  expect(typeof calcObj).toBe('object');
});

test('calcObj object calculator works on summation of positive integers', () => {
  expect(calcObj.sum(12, 10)).toBe(22);
});

test('calcObj object calculator works on summation of negative integers', () => {
  expect(calcObj.sum(-12, -10)).toBe(-22);
});

test('calcObj object calculator works on summation of positive integer and decimal', () => {
  expect(calcObj.sum(12, 0.1)).toBe(12.1);
});

test('calcObj object calculator works on subtraction of positive integers', () => {
  expect(calcObj.subtract(12, 10)).toBe(2);
});

test('calcObj object calculator works on subtraction of negative integers', () => {
  expect(calcObj.subtract(-12, 10)).toBe(-22);
});

test('calcObj object calculator works on subtraction of floats', () => {
  expect(calcObj.subtract(12.16, 5.1)).toBe(7.0600000000000005);
});

test('calcObj object calculator works on multiplication works on positive numbers', () => {
  expect(calcObj.multiply(12, 10)).toBe(120);
});

test('calcObj object calculator works on multiplication works on negative numbers', () => {
  expect(calcObj.multiply(-12, 10)).toBe(-120);
});

test('calcObj object calculator works on multiplication', () => {
  expect(calcObj.multiply(8.9, 5.6)).toBe(49.839999999999996);
});

test('calcObj object calculator works on division of positive numbers', () => {
  expect(calcObj.divide(12, 6)).toBe(2);
});

test('calcObj object calculator works on division of negative numbers', () => {
  expect(calcObj.divide(-12, -6)).toBe(2);
});

test('calcObj object calculator works on division positive and negative numbers', () => {
  expect(calcObj.divide(12, -6)).toBe(-2);
});

test('calcObj object calculator works on division float numbers', () => {
  expect(calcObj.divide(0.75, -0.5)).toBe(-1.5);
});
