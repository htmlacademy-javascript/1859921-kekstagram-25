const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// eslint-disable-next-line arrow-body-style
const isEscapeKey = (evt) => {
  return evt.key === 'Escape';
};

const showAlert = (message) => {
  const alertTemplate = document.querySelector('#data-error').content.querySelector('.error');
  const alertContainer = alertTemplate.cloneNode(true);
  const alertTextContainer = alertContainer.querySelector('.error__title');
  const ALERT_SHOW_TIME = 5000;

  alertTextContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};


export {getRandomPositiveInteger, isEscapeKey, showAlert, debounce};
