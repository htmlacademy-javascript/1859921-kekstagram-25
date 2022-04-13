import {isEscapeKey} from './util.js';
import {closeUploadForm} from './form.js';

const bodyTagElement = document.querySelector('body');
const formElement = document.querySelector('.img-upload__form');

const onSuccessTemplate = document.querySelector('#success').content.querySelector('.success');
const onErrorTemplate = document.querySelector('#error').content.querySelector('.error');
const uploadMessageTemplate = document.querySelector('#messages').content.querySelector('.img-upload__message');
const documentFragment = document.createDocumentFragment();
let messageOnSuccess = null;
let messageOnError = null;

const deleteMessage = () => {
  if (messageOnSuccess) {
    messageOnSuccess.remove();
  }
  bodyTagElement.classList.remove('modal-open');
};

const deleteErrorMessage = () => {
  if (messageOnError) {
    messageOnError.remove();
  }
  bodyTagElement.classList.remove('modal-open');
};

const onEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    deleteMessage();
    deleteErrorMessage();
  }
};

const showsSuccessMessage = () => {

  messageOnSuccess = onSuccessTemplate.cloneNode(true);
  documentFragment.appendChild(messageOnSuccess);
  bodyTagElement.appendChild(documentFragment);
  bodyTagElement.classList.add('modal-open');
  formElement.reset();
  closeUploadForm();

  document.addEventListener ('click', (event) => {
    if (event.target.classList.contains('success__inner')) {
      return;
    }
    deleteMessage();
  });

  const successButton = onSuccessTemplate.querySelector('.success__button');
  successButton.addEventListener('click', deleteMessage);

  document.addEventListener('keydown', onEscKeydown);
};

const showsErrorMessage = () => {

  messageOnError = onErrorTemplate.cloneNode(true);
  documentFragment.appendChild(messageOnError);
  bodyTagElement.appendChild(documentFragment);
  bodyTagElement.classList.add('modal-open');
  formElement.reset();
  closeUploadForm();

  document.addEventListener ('click', (event) => {
    if (event.target.classList.contains('error__inner')) {
      return;
    }
    deleteErrorMessage();
  });

  const errorButton = onErrorTemplate.querySelector('.error__button');
  errorButton.addEventListener('click', deleteErrorMessage);

  document.addEventListener('keydown', onEscKeydown);
};

const showsUploadMessage = () => {

  const messageLoading = uploadMessageTemplate.cloneNode(true);
  documentFragment.appendChild(messageLoading);
  bodyTagElement.appendChild(documentFragment);
  bodyTagElement.classList.add('modal-open');
};

export {showsSuccessMessage, showsErrorMessage, showsUploadMessage};
