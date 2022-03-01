/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
function getRandomInt(min, max) {
  if (min < 0 || max <= 0 || max <= min){
    throw new Error('Переданы некорректные данные');
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
getRandomInt(0, 100);

//источник https://basicweb.ru/javascript/js_math_random.php

function checkStringAccepted(testString, maxLength) {
  return testString.length <= maxLength;
}
checkStringAccepted();


//4.9. Больше деталей

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

const PHOTO_DESCRIPTION = [
  'Неплохо',
  'Идеально',
  'Очень красиво',
  'Плохо',
  'Както так'
];

const OPTION_NUMBER = 200;

const COUNT_COMMENTS = 25;

// const getRandomPositiveInteger = (a, b) => {
//   const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
//   const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
//   const result = Math.random() * (upper - lower + 1) + lower;
//   return Math.floor(result);
// };

const getRandomArrayElement = (elements) => {
  return elements[getRandomPositiveInteger(0, elements.length - 1)];
};

const createCommentsPhoto = () => {
  return {
    id: getRandomPositiveInteger(1, OPTION_NUMBER),
    avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
    name: getRandomArrayElement(USER_NAMES),
    message: getRandomArrayElement(COMMENTS_TEXT),
  };
};

const createPhotosDescription = () => {
  return {
    id: id,
    url: `photos/${getRandomPositiveInteger(1, OPTION_NUMBER)}.jpg`,
    description: getRandomArrayElement(PHOTO_DESCRIPTION),
    likes: getRandomPositiveInteger(15, 200),
    comments: getRandomArrayElement(createCommentsPhoto),
  };
};

const randomСomments = Array.from({length: COUNT_COMMENTS}, createCommentsPhoto);

console.log(randomСomments);
