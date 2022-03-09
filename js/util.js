/* eslint-disable no-undef */
/* eslint-disable no-console */
const createCommentsPhoto = (id) => ({
  id,
  avatar: `img/avatar/${getRandomPositiveInteger(1, PHOTO_DESCRIPTIONS.length + 1)}.svg`,
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
  createCommentsPhoto,
  createPhotos,
  randomUserPhotos,
};
