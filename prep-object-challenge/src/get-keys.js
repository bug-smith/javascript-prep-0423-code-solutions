/* exported getKeys */
function getKeys(object) {
  const arrayFinal = [];
  for (const prop in object) {
    arrayFinal.push(prop);
  }
  return arrayFinal;
}
