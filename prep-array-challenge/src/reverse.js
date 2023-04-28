/* exported reverse */
function reverse(array) {
  const arrayFinal = [];
  let arrayLen = array.length;
  while (arrayLen--) {
    arrayFinal.push(array[arrayLen]);
  }
  return arrayFinal;
}
