const scaleControlSmallerButton = document.querySelector('.scale__control--smaller');
const scaleControlBiggerButton = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');
const imgUploadPreview = document.querySelector('.img-upload__preview img');
const sliderElement = document.querySelector('.effect-level__slider');
const effectValueElement = document.querySelector('.effect-level__value');
const sliderFiedset = document.querySelector('.img-upload__effect-level');

const SCALE_STEP = 25;

const changeScale = (multiplier) => {
  const scaleValue = Number(scaleControlValue.value.slice(0, -1)) + multiplier * SCALE_STEP;
  scaleControlValue.value = `${scaleValue}%`;
  imgUploadPreview.style.transform = `scale(${scaleValue/100})`;
};

const onScaleControlSmallerButtonClick = () => {
  if (scaleControlValue.value !== '25%') {
    changeScale(-1);
  }
};

const onScaleControlBiggerButtonClick = () => {
  if (scaleControlValue.value !== '100%') {
    changeScale(1);
  }
};

const activateScaleControls = () => {
  scaleControlSmallerButton.addEventListener('click', onScaleControlSmallerButtonClick);
  scaleControlBiggerButton.addEventListener('click', onScaleControlBiggerButtonClick);
};

const desactivateScaleControls = () => {
  scaleControlSmallerButton.removeEventListener('click', onScaleControlSmallerButtonClick);
  scaleControlBiggerButton.removeEventListener('click', onScaleControlBiggerButtonClick);
};

const resetScale = () => {
  scaleControlValue.value = '100%';
  imgUploadPreview.style.transform = 'scale(1)';
};

//эффекты

const FILTERS_CONFIG = {
  chrome: {
    options: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    },
    style: 'grayscale',
    unit: '',
  },

  sepia: {
    options: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    },
    style: 'sepia',
    unit: '',
  },

  marvin: {
    options: {
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
    },
    style: 'invert',
    unit: '%',
  },

  phobos: {
    options: {
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
    },
    style: 'blur',
    unit: 'px',
  },

  heat: {
    options: {
      range: {
        min: 1,
        max: 3,
      },
      start: 3,
      step: 0.1,
    },
    style: 'brightness',
    unit: '',
  },
};

//слайдер

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

effectValueElement.value = 100;

sliderElement.noUiSlider.on('update', () => {
  effectValueElement.value = sliderElement.noUiSlider.get();
});

const setOriginalEffect = () => {
  imgUploadPreview.className = '';
  imgUploadPreview.style.filter = 'none';
  sliderFiedset.style.display = 'none';
};

const setEffect = (value) => {
  sliderFiedset.style.display = 'block';

  const currentConfig = FILTERS_CONFIG[value];

  sliderElement.noUiSlider.updateOptions(currentConfig.options);

  sliderElement.noUiSlider.on('update', (values, handle) => {
    imgUploadPreview.style.filter = `${currentConfig.style}(${values[handle]}${currentConfig.unit})`;
    effectValueElement.value = values[handle];
  });
};

const onEffectButtonClick = (evt) => {
  imgUploadPreview.className = '';
  imgUploadPreview.classList.add(`effects__preview--${evt.target.value}`);

  if (evt.target.value === 'none') {
    setOriginalEffect();
  } else {
    setEffect(evt.target.value);
  }
};

export {activateScaleControls, desactivateScaleControls, resetScale, onEffectButtonClick, setOriginalEffect};
