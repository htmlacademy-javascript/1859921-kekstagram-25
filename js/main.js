import {renderMiniatures} from './thumbnail-rendering.js';
import {setUserFormSubmit} from './form.js';

import {showsSuccessMessage} from './upload-message.js';

import {getData} from './api.js';
import './scale.js';

getData ((photos) => {
  renderMiniatures(photos);
});
setUserFormSubmit (showsSuccessMessage);
