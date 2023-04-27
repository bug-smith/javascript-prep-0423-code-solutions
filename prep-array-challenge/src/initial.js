/* exported initial */
function initial(array) {
  const arrayFinal = [];
  for (let i = 0; i < array.length - 1; i++) {
    arrayFinal.push(array[i]);
  }
  return arrayFinal;
}
