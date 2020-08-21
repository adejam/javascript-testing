const cipher = require('./cipher');

test('cipher function exists', () => {
  expect(cipher).toBeDefined();
});

test('cipher function encrypts', () => {
  expect(cipher('hello', 5, 'encrypt')).toBe('mjqqt');
});

test('cipher function decrypts', () => {
  expect(cipher('mjqqt', 5, 'decrypt')).toBe('hello');
});
