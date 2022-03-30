/* eslint-disable no-undef */
/* eslint-disable no-console */
import {pageBody} from './popup.js';
import {isEscapeKey} from './util.js';

const RE = /^#[A-Za-zА-Яа-яЕё0-9]{1,19}$/;
const MAX_HASHTAGS = 5;
const DESCRIPTION_MAX_LENGHT = 140;

const formUpload = document.querySelector('.img-upload__form');

const photoUpload= formUpload.querySelector('#upload-file');
const photoEditing = formUpload.querySelector('.img-upload__overlay');
const cancelButton = formUpload.querySelector('#upload-cancel');
const commentInput = formUpload.querySelector('.text__description');
const hashtagInput = formUpload.querySelector('.text__hashtags');

const closeUploadForm = () => {
  pageBody.classList.remove('modal-open');
  photoEditing.classList.add('hidden');
  commentInput.value = '';
  hashtagInput.value = '';
  photoUpload.value = '';
};

const onUploadEscapeKeydown = (evt) => {
  if (isEscapeKey(evt) && evt.target !== commentInput && evt.target !== hashtagInput) {
    evt.preventDefault();
    closeUploadForm();
    document.removeEventListener('keydown', onUploadEscapeKeydown);
  }
};

const openUploadForm = () => {
  pageBody.classList.add('modal-open');
  photoEditing.classList.remove('hidden');
  document.addEventListener('keydown', onUploadEscapeKeydown);
};

photoUpload.addEventListener('change', () => {
  openUploadForm();
});

cancelButton.addEventListener('click', () => {
  closeUploadForm();
  document.removeEventListener('keydown', onUploadEscapeKeydown);
});

const pristine = new Pristine(formUpload, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'img-upload__text-error'
}, true);

const getLowercaseStrings = (string) => string.split(' ').map((item) => item.toLowerCase());

const checkHashtagWriting = (hashTags) => hashTags.every((item) => RE.test(item));

const checkHashtagRepeat = (hashTags) => hashTags.every((item) => hashTags.indexOf(item) === hashTags.lastIndexOf(item));

const checkArrayLength = (hashTags) => hashTags.length <= MAX_HASHTAGS;

const validateHashtags = (stringValue) => {
  const hashtagValues = getLowercaseStrings(stringValue);
  return checkHashtagWriting(hashtagValues) && checkHashtagRepeat(hashtagValues) && checkArrayLength(hashtagValues);
};

pristine.addValidator(hashtagInput,
  validateHashtags,
  'ХэшТег не соответствует требованиям'
);

const toCheckString = (verifiableString, maxString) => verifiableString.length <= maxString;
const validateDescriptionLength = (value) => toCheckString(value, DESCRIPTION_MAX_LENGHT);
pristine.addValidator(commentInput,
  validateDescriptionLength
);

formUpload.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
