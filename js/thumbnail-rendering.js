import {showBigPicture} from './popup.js';
import {getRandomPositiveInteger} from './util.js';

const picturesList = document.querySelector('.pictures');
picturesList.querySelector('.pictures__title').classList.remove('visually-hidden');

const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

let imagesCount = 25;

const sortPhotos = (photoA, photoB) => {
  const activeFilter = document.querySelector('.img-filters__button--active').id;
  imagesCount = 25;

  switch (activeFilter) {
    case 'filter-discussed':
      return photoB.comments.length - photoA.comments.length;
    case 'filter-random':
      imagesCount = 10;
      return getRandomPositiveInteger(1, 10) - getRandomPositiveInteger(1, 10);
    case 'filter-default':
    default:
      return 0;
  }
};

const clearPhotos = () => {
  const photos = document.querySelectorAll('.picture');
  photos.forEach((photo) => {
    photo.parentNode.removeChild(photo);
  });
};

const renderMiniatures = (thumbnailPhotos) => {
  clearPhotos();
  const picturesThumbnailFragment = document.createDocumentFragment();

  thumbnailPhotos
    .slice()
    .sort(sortPhotos)
    .slice(0, imagesCount)
    .forEach((thumbnailPhoto) => {
      const {url, likes, comments} = thumbnailPhoto;
      const pictureElement = pictureTemplate.cloneNode(true);
      pictureElement.querySelector('.picture__img').src = url;
      pictureElement.querySelector('.picture__likes').textContent = likes;
      pictureElement.querySelector('.picture__comments').textContent = comments.length;
      pictureElement.addEventListener('click', () => {
        showBigPicture(thumbnailPhoto);
      });
      picturesThumbnailFragment.appendChild(pictureElement);
    });
  picturesList.appendChild(picturesThumbnailFragment);
};

export {renderMiniatures};
