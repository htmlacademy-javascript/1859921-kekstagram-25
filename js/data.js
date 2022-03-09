
const USER_NAMES = [
  'Бриджит',
  'Карлетт',
  'Фрида',
  'Эвелин',
  'Абигель',
  'Леонардо',
  'Матье'
];

const COMMENTS_TEXT = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.',
  'Как можно было поймать такой неудачный момент?!'
];

const PHOTO_DESCRIPTIONS = [
  'Неплохо',
  'Идеально',
  'Очень красиво',
  'Плохо',
  'Както так'
];

const PHOTOS_COUNT = 25;
const MIN_LIKES_COUNT = 15;
const MAX_LIKES_COUNT = 200;

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

export {
  USER_NAMES,
  COMMENTS_TEXT,
  PHOTO_DESCRIPTIONS,
  PHOTOS_COUNT,
  MIN_LIKES_COUNT,
  MAX_LIKES_COUNT,
  getRandomArrayElement,
};
