/* eslint-disable no-undef */
/* eslint-disable no-console */
import {  USER_NAMES,
  COMMENTS_TEXT,
  PHOTO_DESCRIPTIONS,
  PHOTOS_COUNT,
  MIN_LIKES_COUNT,
  MAX_LIKES_COUNT,
  getRandomArrayElement
} from './data';

const createCommentsPhoto = (id) => ({
  id,
  avatar: `img/avatar/${getRandomPositiveInteger(1, 6)}.svg`,
  name: getRandomArrayElement(USER_NAMES),
  message: getRandomArrayElement(COMMENTS_TEXT),
});

const createPhotos = (id) => ({
  id,
  url: `photos/${id}.jpg`,    description: getRandomArrayElement(PHOTO_DESCRIPTIONS),
  likes: getRandomPositiveInteger(MIN_LIKES_COUNT, MAX_LIKES_COUNT),
  comments: Array.from({length: getRandomPositiveInteger(1, COMMENTS_TEXT.length)}, (elem, index) => createCommentsPhoto(index+1)),
});

const randomUserPhotos = Array.from({length: PHOTOS_COUNT}, (elem, index) => createPhotos(index+1));

console.log(randomUserPhotos);

export {
  randomUserPhotos,
};
