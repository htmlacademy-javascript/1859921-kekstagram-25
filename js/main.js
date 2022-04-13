import {renderMiniatures} from './thumbnail-rendering.js';
import {setUserFormSubmit} from './form.js';

import {showsSuccessMessage} from './upload-message.js';

import {getData} from './api.js';
import './scale.js';

import {initFilters, setFilterUpdate} from './filter.js';

import {showAlert, debounce} from './util.js';

const RERENDER_DELAY = 500;

getData((photos) => {
  renderMiniatures(photos);
  initFilters();
  setFilterUpdate(debounce(
    () => renderMiniatures(photos),
    RERENDER_DELAY,
  ));
}, showAlert);

setUserFormSubmit (showsSuccessMessage);
