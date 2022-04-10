import {randomUserPhotos} from './data.js';
import {renderMiniatures} from './thumbnail-rendering.js';
import {showBigPicture, pageBody, bigPicture} from './popup.js';
import './form.js';
renderMiniatures(randomUserPhotos, showBigPicture, pageBody, bigPicture);

import {getData} from './api.js';
import {showsSuccessMessage} from './upload-message.js';
import {setUserFormSubmit} from './form.js';

getData ((photos) => {
  renderMiniatures(photos);
});
setUserFormSubmit (showsSuccessMessage);
