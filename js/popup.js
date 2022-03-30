/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
import {isEscapeKey} from './util.js';

const COMMENTS_LIMIT = 5;
let commentsArray = [];
const bigPicture = document.querySelector('.big-picture');
const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');
const socialComments = document.querySelector('.social__comments');
const fragment = document.createDocumentFragment();
const pageBody = document.querySelector('body');

const commentsLoaderButton = bigPicture.querySelector('.social__comments-loader');

const onButtonModalClose = () => {
  bigPicture.classList.add('hidden');
  pageBody.classList.remove('modal-open');
  document.removeEventListener('keyup', onEscapePress);
  bigPictureCancel.removeEventListener('click', onButtonModalClose);
  commentsArray = [];
  commentsLoaderButton.removeEventListener('click', onLoadButtonClick);
};

const onEscapePress = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    onButtonModalClose();
  }
};

const showBigPicture = (photo) => {
  pageBody.classList.add('modal-open');
  bigPicture.classList.remove('hidden');
  bigPicture.querySelector('.big-picture__img img').src = photo.url;
  bigPicture.querySelector('.likes-count').textContent = photo.likes;
  bigPicture.querySelector('.comments-count').textContent = photo.comments.length;
  bigPicture.querySelector('.social__caption').textContent = photo.description;
  bigPicture.querySelector('.comments-loader').classList.add('hidden');
  bigPicture.querySelector('.social__comment-count').classList.add('hidden');

  socialComments.innerHTML = '';

  photo.comments.forEach((comment) => {
    const commentItem = document.createElement('li');
    commentItem.classList.add('social__comment');
    const commentImg = document.createElement('img');
    commentItem.appendChild(commentImg);
    commentImg.classList.add('social__picture');
    commentImg.src = comment.avatar;
    commentImg.alt = comment.name;
    commentImg.width = 35;
    commentImg.height = 35;
    const commentText = document.createElement('p');
    commentItem.appendChild(commentText);
    commentText.classList.add('social__text');
    commentText.textContent = comment.message;
    fragment.appendChild(commentItem);
  });

  socialComments.appendChild(fragment);

  document.addEventListener('keydown', onEscapePress);

  bigPictureCancel.addEventListener('click', onButtonModalClose);

};

const onLoadButtonClick = () => {
  if (commentsArray.length <= COMMENTS_LIMIT) {
    commentsLoaderButton.classList.add('hidden');
  }
  commentItem(commentsArray.splice(0, COMMENTS_LIMIT));
  const commentsCount = document.querySelectorAll('.social__comment');
  commentsShownCount.textContent = commentsCount.length;
};

// eslint-disable-next-line eol-last
export {showBigPicture, pageBody};

//Почему не работает ограничение комментариев?//
