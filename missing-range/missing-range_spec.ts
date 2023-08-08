import { listMissingRanges } from "./index";
import "mocha";
import { expect } from "chai";

describe("Find Missing Ranges", function () {
  // Arrange
  const tests = [
    { ranges: [1, 3, 4, 9], expected: ["0", "2", "5->8", "10->99"] },
    { ranges: [], expected: ["0->99"] },
    { ranges: [99], expected: ["0->98"] },
    { ranges: [0], expected: ["1->99"] },
    { ranges: [9], expected: ["0->8", "10->99"] },
  ];

  tests.forEach(function ({ ranges, expected }) {
    it(`It should take [${ranges.join(
      ",",
    )}] and return expected results`, function () {
      // Act
      let result = listMissingRanges(ranges);

      // Assert
      expect(result).to.eql(expected);
    });
  });
});
