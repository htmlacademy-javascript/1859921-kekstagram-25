import {randomUserPhotos} from './data.js';
import {renderMiniatures} from './thumbnail-rendering.js';
import {showBigPicture} from './popup.js';

renderMiniatures(randomUserPhotos, showBigPicture);
