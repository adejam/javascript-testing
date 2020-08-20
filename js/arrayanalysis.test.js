const analyze = require('./arrayanalysis');

test('analyze function exists', () => {
  expect(analyze).toBeDefined();
});

test('An object with average,min,max and length created', () => {
  expect(analyze([2, 4, 6])).toEqual({
    average: 4,
    min: 2,
    max: 6,
    lengthOfArray: 3,
  });
});
