/* exported isVowel */
function isVowel(character) {
  const vowelRegExp = /[AEIOUaeiou]/;
  const characterContainsVowel = vowelRegExp.test(character);
  return characterContainsVowel;
}
