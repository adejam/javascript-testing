import cipher from './cipher';

test('cipher function exists', () => {
  expect(cipher).toBeDefined();
});

test('cipher function encrypts', () => {
  expect(cipher('hello', 5, 'encrypt')).toBe('mjqqt');
});

test('cipher function decrypts', () => {
  expect(cipher('mjqqt', 5, 'decrypt')).toBe('hello');
});

test('cipher function encrypts and keeps same case', () => {
  expect(cipher('HEllo', 5, 'encrypt')).toBe('MJqqt');
});

test('cipher function decrypts and keeps same case', () => {
  expect(cipher('mJQqt', 5, 'decrypt')).toBe('hELlo');
});

test('cipher function encrypts and keeps punctuation', () => {
  expect(cipher('HEl/,.lo', 5, 'encrypt')).toBe('MJq/,.qt');
});

test('cipher function decrypts and keeps punctuation', () => {
  expect(cipher('mJQ/,.qt', 5, 'decrypt')).toBe('hEL/,.lo');
});

test('cipher function encrypts a sentence', () => {
  expect(cipher('Hello world. I am Jamiu', 5, 'encrypt')).toBe('Mjqqt btwqi. N fr Ofrnz');
});

test('cipher function decrypts a sentence', () => {
  expect(cipher('Mjqqt btwqi. N fr Ofrnz', 5, 'decrypt')).toBe('Hello world. I am Jamiu');
});
