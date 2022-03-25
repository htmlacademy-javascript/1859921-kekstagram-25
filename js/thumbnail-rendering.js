import {showBigPicture} from './popup.js';

const picturesList = document.querySelector('.pictures');
picturesList.querySelector('.pictures__title').classList.remove('visually-hidden');

const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const renderMiniatures = (thumbnailPhotos) => {
  const picturesThumbnailFragment = document.createDocumentFragment();

  thumbnailPhotos.forEach((thumbnailPhoto) => {
    const {url, likes, comments} = thumbnailPhoto;
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    picturesThumbnailFragment.appendChild(pictureElement);
    pictureElement.addEventListener('click', () => showBigPicture(thumbnailPhoto));

  });

  picturesList.appendChild(picturesThumbnailFragment);
};

export {renderMiniatures};
