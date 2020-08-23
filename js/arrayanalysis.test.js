const analyze = require('./arrayanalysis');

test('analyze function exists', () => {
  expect(analyze).toBeDefined();
});

test('return type of analyze is an object', () => {
  expect(typeof analyze([1, 2, 3])).toBe('object');
});

test('analyze function returned object has lengthOfArray property', () => {
  expect(analyze([2, 4, 6]).lengthOfArray).toBe(3);
});

test('analyze function returned object has average property', () => {
  expect(analyze([2, 4, 6]).average).toBe(4);
});

test('analyze function returned object has min property', () => {
  expect(analyze([2, 4, 6]).min).toBe(2);
});

test('analyze function returned object has max property', () => {
  expect(analyze([2, 4, 6]).max).toBe(6);
});
