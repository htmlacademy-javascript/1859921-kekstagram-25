/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
const bigPicture = document.querySelector('.big-picture');
const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');
const socialComments = document.querySelector('.social__comments');
const fragment = document.createDocumentFragment();

function onButtonModalClose() {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keyup', onEscapePress);
  bigPictureCancel.removeEventListener('click', onButtonModalClose);
}

const onEscapePress = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    onButtonModalClose();
  }
};

function showBigPicture(photo) {
  document.body.classList.add('modal-open');
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

  document.addEventListener('keypress', onEscapePress);

  bigPictureCancel.addEventListener('click', onButtonModalClose);
}
