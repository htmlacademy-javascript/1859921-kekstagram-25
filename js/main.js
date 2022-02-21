function getRandomInt(min, max) {
  if (min < 0 || max <= 0 || max <= min){
    return NaN;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
getRandomInt(0, 100);

//источник https://basicweb.ru/javascript/js_math_random.php

function checkStringAccepted(testString, maxLength) {
  return testString.length <= maxLength;
}
checkStringAccepted();
