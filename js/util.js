const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// eslint-disable-next-line arrow-body-style
const getRandomArrayElement = (elements) => {
  return elements[getRandomPositiveInteger(0, elements.length - 1)];
};

// eslint-disable-next-line arrow-body-style
const isEscapeKey = (evt) => {
  return evt.key === 'Escape';
};

export {
  getRandomArrayElement,
  getRandomPositiveInteger,
  isEscapeKey,
};
