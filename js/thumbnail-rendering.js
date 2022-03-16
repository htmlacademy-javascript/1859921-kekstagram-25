const picturesList = document.querySelector('.pictures');
picturesList.querySelector('.pictures__title').classList.remove('visually-hidden');

const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const renderMiniatures = (thumbnailPhoto) => {
  const picturesThumbnailFragment = document.createDocumentFragment();

  thumbnailPhoto.forEach(({url, likes, comments}) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    picturesThumbnailFragment.appendChild(pictureElement);
  });

  picturesList.appendChild(picturesThumbnailFragment);
};

export {renderMiniatures};
