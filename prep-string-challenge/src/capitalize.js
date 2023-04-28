/* exported capitalize */
function capitalize(word) {
  const firstLetterCap = word.charAt(0).toUpperCase();
  const wordDeCapped = word.slice(1).toLowerCase();

  return firstLetterCap + wordDeCapped;
}
