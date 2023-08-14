/**
 * Given a sorted integer array where the range of elements are [0, 99] inclusive, return its
 * missing ranges.
 *
 * @param {number[]} array - The sorted integer array.
 * @returns {string[]} An array of strings representing the missing ranges.
 *
 * Example:
 * For the input array [0, 1, 3, 50, 75], the function should return:
 * ["2", "4->49", "51->74", "76->99"]
 *
 * Candidate Questions:
 * Q: What if the given array is empty?
 * A: Then you should return ["0->99"] as those ranges are missing.
 *
 * Q: What if the given array contains all elements from the ranges?
 * A: Return an empty list, which means no range is missing.
 */

export const listMissingRanges = (array: number[]) => {
  if (array.length === 0) return ["0->99"];
  let result: string[] = [];
  const newArray = array.sort((a, b) => a - b);
  if (
    newArray.length > 0 &&
    newArray[0] <= 99 &&
    newArray[0] >= 0 &&
    newArray[newArray.length - 1] <= 99 &&
    newArray[newArray.length - 1] >= 0
  ) {
    if (newArray[newArray.length - 1] !== 99) {
      newArray.push(100);
    }
    if (newArray[0] !== 0) {
      newArray.unshift(-1);
    }

    newArray.forEach((item, index) => {
      const difference = array[index + 1] - item;
      if (difference > 1) {
        let output: string = "";
        output = output + (item + 1).toString();
        if (item + 1 !== array[index + 1] - 1) {
          output = output + "->" + (array[index + 1] - 1).toString();
        }
        result.push(output);
      }
    });
    return result;
  }
};
