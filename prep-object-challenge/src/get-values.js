/* exported getValues */
function getValues(object) {
  const arrayFinal = [];
  for (const prop in object) {
    arrayFinal.push(object[prop]);
  }
  return arrayFinal;
}
