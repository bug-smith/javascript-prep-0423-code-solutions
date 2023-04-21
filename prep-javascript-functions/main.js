function addTwoNumbers(num1, num2) {
  var combinedNumber = num1 + num2;
  return combinedNumber;
}

addTwoNumbers();

const addTwoNumbersResult = addTwoNumbers(2, 2);

console.log('addTwoNumbers Exercise: ', addTwoNumbersResult);

function convertHoursToMinutes(hours) {
  var totalMinutes = hours * 60;
  return totalMinutes;
}

convertHoursToMinutes();

const convertHoursToMinutesResult = convertHoursToMinutes(2);

console.log('convertHoursToMinutes Exercise: ', convertHoursToMinutesResult);

function getGreeting(nickname) {
  var greeting = 'Hello, ' + nickname + '!';
  return greeting;
}

getGreeting();

const getGreetingResult = getGreeting('World');

console.log('getGreeting Exercise:', getGreetingResult);

function addAndMultiplyBy5(num1, num2) {
  var summedNumbers = num1 + num2;
  var totalNumbers = summedNumbers * 5;
  return totalNumbers;
}

addAndMultiplyBy5();

const addAndMultiplyBy5Result = addAndMultiplyBy5(10, 5);

console.log('addAnyMultiplyBy5 Exercise: ', addAndMultiplyBy5Result);

function multiplyAndDivideBy5(num1, num2) {
  var multipliedNumber = num1 * num2;
  const totalNumber = multipliedNumber / 5;
  return totalNumber;
}

multiplyAndDivideBy5();

const multiplyAndDivideBy5Result = multiplyAndDivideBy5(35, 10);

console.log('multiplyAndDivideBy5 Exercise: ', multiplyAndDivideBy5Result);

function subtractTwoNumbers(num1, num2) {
  var subtractedNumbers = num1 - num2;
  return subtractedNumbers;
}

subtractTwoNumbers();

const subtractTwoNumbersResult = subtractTwoNumbers(22, 7);

console.log('subtractTwoNumbers Exercise: ', subtractTwoNumbersResult);

function getCircleCircumference(radius) {
  var totalDiameter = radius * 2;
  const totalRadius = totalDiameter * Math.PI;
  return totalRadius;
}

getCircleCircumference();

const getCircleCircumferenceResult = getCircleCircumference(5);

console.log('getCircleCircumference Exercise: ', getCircleCircumferenceResult);

function getFullName(firstName, lastName) {
  var fullName = firstName + ' ' + lastName;
  return fullName;
}

getFullName();

const getFullNameResult = getFullName('Tyler', 'Smith');

console.log('getFullName Exercise: ', getFullNameResult);

function cube(number) {
  var cubedNumber = number * number * number;
  return cubedNumber;
}

cube();

const cubeResult = cube(5);

console.log('cube Exercise: ', cubeResult);
