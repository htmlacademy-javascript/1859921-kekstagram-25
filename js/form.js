/* eslint-disable no-undef */
/* eslint-disable no-console */
import {pageBody} from './popup.js';
import {isEscapeKey} from './util.js';

const RE = /^#[A-Za-zА-Яа-яЕё0-9]{1,19}$/;

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

// new Pristine(formUpload);

// formUpload.addEventListener('submit', (evt) => {
//   evt.preventDefault();

//   const isValid = pristine.validate();
//   if (isValid) {
//     console.log('Можно отправлять');
//   } else {
//     console.log('Форма невалидна');
//   }
// });


// const pristine = new Pristine(formUpload, {
//   classTo: 'text__upload-label',
//   errorTextParent: 'text__upload-label',
//   errorTextClass: 'text__upload-label-error-text',
// });

// formUpload.addEventListener('submit', (evt) => {
//   const isValid = pristine.validate();
//   if (!isValid) {
//     evt.preventDefault();
//   }
// });

// const getHashtagArray = () => {
//   const hashtagElements = hashtagInput.value.toLowerCase().split(' ').filter((hashtag) => hashtag !== '');
//   return hashtagElements;
// };

// const checkHashtagNumber = () => {
//   getHashtagArray();
//   return getHashtagArray().length <= MAX_HASHTAG;
// };
// Pristine.addValidator(hashtagInput, checkHashtagNumber, 'Вы можете добавить не более 5 хэштегов');


// const checkHashtagSpelling = () => getHashtagArray().every((element) => (element.match(RE)));

// Pristine.addValidator(hashtagInput, checkHashtagSpelling, 'Хэш-тег начинается с символа # (решётка); строка после решётки должна состоять только из букв и чисел, хеш-тег не может состоять только из одной решётки; максимальная длина одного хэш-тега 20 символов, включая решётку');

// const checkSameValue = () => {
//   const uniqueElements = new Set(getHashtagArray());
//   return getHashtagArray().length === uniqueElements.size;
// };

// Pristine.addValidator(hashtagInput, checkSameValue, 'Хэштеги не должгы повторяться');


const pristine = new Pristine(formUpload, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'img-upload__text-error'
}, true);

const getHashtagsArray = (string) => string.split(' ').map((item) => item.toLowerCase());

const checkHashtagWriting = (array) => array.every((item) => RE.test(item));

const checkHashtagRepaet = (array) => array.every((item) => array.indexOf(item) === array.lastIndexOf(item));

const checkArrayLength = (array) => array.length <= 5;

const validateHashtags = (stringValue) => {
  const splitArray = getHashtagsArray(stringValue);
  return checkHashtagWriting(splitArray) && checkHashtagRepaet(splitArray) && checkArrayLength(splitArray);
};

pristine.addValidator(hashtagInput,
  validateHashtags,
  'ХэшТег не соответствует требованиям'
);

const toCheckString = (verifiableString, maxString) => verifiableString.length <= maxString;
const descriptionMaxLength = 140;
const validateDescriptionLength = (value) => toCheckString(value, descriptionMaxLength);
pristine.addValidator(commentInput,
  validateDescriptionLength
);

formUpload.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
