/* eslint-disable no-undef */
import {getRandomArrayElement, getRandomPositiveInteger} from './util.js';

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

const createCommentPhoto = (id) => ({
  id,
  avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
  name: getRandomArrayElement(USER_NAMES),
  message: getRandomArrayElement(COMMENTS_TEXT),
});

const createPhoto = (id) => ({
  id,
  url: `photos/${id}.jpg`,    description: getRandomArrayElement(PHOTO_DESCRIPTIONS),
  likes: getRandomPositiveInteger(MIN_LIKES_COUNT, MAX_LIKES_COUNT),
  comments: Array.from({length: getRandomPositiveInteger(1, COMMENTS_TEXT.length)}, (elem, index) => createCommentPhoto(index+1)),
});

const randomUserPhotos = Array.from({length: PHOTOS_COUNT}, (elem, index) => createPhoto(index+1));

export {
  randomUserPhotos,
};
