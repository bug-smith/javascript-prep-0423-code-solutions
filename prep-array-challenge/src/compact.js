/* exported compact */
function compact(array) {
  const finalArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      finalArray.push(array[i]);
    }
  }
  return finalArray;
}
