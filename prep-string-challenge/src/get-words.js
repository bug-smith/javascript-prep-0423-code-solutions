/* exported getWords */
function getWords(string) {
  const wordsArray = string.split(' ');
  if (wordsArray[0] === '' && wordsArray.length === 1) return [];
  return wordsArray;
}
