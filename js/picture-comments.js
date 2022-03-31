import {bigPicture} from './popup.js';
import {randomUserPhotos} from './data.js';

const socialComments = document.querySelector('.social__comments');
const socialComment = document.querySelector('.social__comment');
const socialCommentsLoader = document.querySelector('.comments-loader');
const socialCommentCounter = bigPicture.querySelector('.comments-counter');
const picturesNode = document.querySelectorAll('.picture');
// const commentsLoaderButton = document.querySelector('.social__comments-loader');

const getCounterComments = function (){
  const commentsArr = socialComments.childNodes;
  const openCommentsArr = [];
  for(let i=0; i<commentsArr.length; i++){
    if (commentsArr[i].classList.value === 'social__comment'){
      openCommentsArr.push(commentsArr[i]);
    }
  }
  socialCommentCounter.textContent = openCommentsArr.length;
};

const getCommentsBigPicture = function (photo,comments) {
  document.addEventListener ('click', () => {
    socialComments.innerHTML = '';
    comments.forEach((elem) => {
      const cloneComment = socialComment.cloneNode(true);
      cloneComment.querySelector('img').src = elem.avatar;
      cloneComment.querySelector('img').alt = elem.name;
      cloneComment.querySelector('.social__text').textContent = elem.message;
      socialComments.appendChild(cloneComment);
      for (let i=0; i<socialComments.children.length; i++){ //хочу вывести только 5 комментариев
        if (i>4){
          socialComments.children[i].classList.add('hidden');
        }
      }
    });
    getCounterComments();
  });
};

//почему это ломает генерацию комментариев?

// for (let i=0; i<randomUserPhotos.length;i++){
//   getCommentsBigPicture(picturesNode[i],randomUserPhotos[i].comments);
// }

//показа 5 следующих комментариев
const getMoreComments = function (){
  const commentsArr = socialComments.childNodes;
  const hiddenCommentsArr = [];
  for (let i=0; i<commentsArr.length;i++){
    if (commentsArr[i].classList.value === 'social__comment hidden'){
      hiddenCommentsArr.push(commentsArr[i]);
    }
  }
  for (let i=0; i<5; i++){
    if (hiddenCommentsArr[i] === undefined){
      getCounterComments();
      return;
    }
    hiddenCommentsArr[i].classList.remove('hidden');
  }
  getCounterComments();
};

socialCommentsLoader.addEventListener('click', getMoreComments);

