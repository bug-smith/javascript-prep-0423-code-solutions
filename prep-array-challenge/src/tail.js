/* exported tail */
function tail(array) {
  const arrayFinal = [];
  for (let i = 1; i < array.length; i++) {
    arrayFinal.push(array[i]);
  }
  return arrayFinal;
}
