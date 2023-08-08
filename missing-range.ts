/**
 * Given a sorted integer array where the range of elements are [0, 99] inclusive, return its
 * missing ranges.
 *
 * @param {number[]} nums - The sorted integer array.
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

import { getInput, rl } from "./utils";

let numberList: number[] = [0, 5]; //change the list for your test cases

const listMissingRanges = (array: number[]) => {
  let result: string[] = [];
  const newArray = array.sort((a, b) => a - b);

  console.log(newArray);
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
    console.log(result);
  } else {
    console.log(
      "make sure your input array has numbers range 0 - 99 inclusive",
    );
    listMissingRanges(numberList);
  }
};

async function main() {
  const userInput = await getInput(
    "Enter some numbers separated by commas range 0 - 99 inclusive: ",
  );
  numberList = userInput.split(",").map((item) => parseInt(item));
  rl.close();
  listMissingRanges(numberList);
}

main();
