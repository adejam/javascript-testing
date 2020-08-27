import capitalizeString from './index';

test('capitalizeString function exists', () => {
  expect(capitalizeString).toBeDefined();
});

test('String Capitalizes', () => {
  expect(capitalizeString('hello')).toEqual('Hello');
});
