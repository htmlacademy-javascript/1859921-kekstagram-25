function getRandomIntFromRange(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// eslint-disable-next-line no-console
console.log(getRandomIntFromRange(1, 100));

//источник https://basicweb.ru/javascript/js_math_random.php


function checkStringAccepted(testString, maxLength) { //можно ли написать maxLength = 140 ?
  if (testString.length <= maxLength) {
    return true;
  }
  return false;
}
checkStringAccepted();
