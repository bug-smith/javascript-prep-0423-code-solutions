/* exported toObject */
function toObject(keyValuePair) {
  const v1 = {};
  v1[keyValuePair[0]] = keyValuePair[1];
  return v1;
}
