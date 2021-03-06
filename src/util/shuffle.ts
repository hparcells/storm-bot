/**
 * Shuffles an array and returns it.
 * @param {Array} array The array to be shuffled.
 * @returns {Array} The shuffled array.
 */
export default function shuffle<T>(array: T[]): T[] {
  let currentIndex = array.length,
    randomIndex,
    temporaryValue;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
