import {randomUserPhotos} from './data.js';
import {renderMiniatures} from './thumbnail-rendering.js';
import {showBigPicture} from './popup.js';
import './form.js';
import './picture-comments.js';

renderMiniatures(randomUserPhotos, showBigPicture);
