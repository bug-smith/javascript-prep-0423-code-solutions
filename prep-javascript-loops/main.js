// create your loops here.

function whileLoop1() {
  var array = [];
  var index = 0;
  while (index < 10) {
    array.push(index);
    index++;
  }
  return array;
}

console.log('whileLoop1 output ', whileLoop1());

function whileLoop2() {
  var array = [];
  var index = 0;
  while (index < 10) {
    array.push(index * 2);
    index++;
  }
  return array;
}

console.log('whileLoop2 output ', whileLoop2());

function forLoop1() {
  var array = [];
  for (let index = 0; index < 10; index++) {
    array.push(index);
  }
  return array;
}

console.log('forLoop1 output ', forLoop1());

function forLoop2() {
  let text = '';
  for (let seconds = 100; seconds >= 0; seconds--) {
    text += 'Time till Explosion ' + seconds + '!';
    if (seconds !== 0) {
      text += '\n';
    }
  }
  return text;
}

console.log('forLoop2 output\n', forLoop2());

const object = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};

function forInLoop1(obj) {
  var array = [];
  for (const property in obj) {
    array.push(property);
  }
  return array;
}

console.log('forInLoop1 output ', forInLoop1(object));

function forInLoop2(obj) {
  var array = [];
  for (const property in obj) {
    array.push(obj[property]);
  }
  return array;
}

console.log('forInLoop2 output ', forInLoop2(object));
