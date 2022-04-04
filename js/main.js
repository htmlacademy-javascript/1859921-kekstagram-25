import {randomUserPhotos} from './data.js';
import {renderMiniatures} from './thumbnail-rendering.js';
import {showBigPicture, pageBody, bigPicture} from './popup.js';
import './form.js';
renderMiniatures(randomUserPhotos, showBigPicture, pageBody, bigPicture);
