import fs from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const currentFilePath = fileURLToPath(import.meta.url);
export const currentDirPath = dirname(currentFilePath);

function readFileContent(file) {
  const p = join(currentDirPath, file);
  const fileContent = fs.readFileSync(p).toString();
  return fileContent;
}

const findLargestSum = (file) => {
  const fileContent = readFileContent(file);

  const lutins = fileContent.split('\n\n');

  let largestSum = lutins.reduce((acc, lutin) => {
    const calories = lutin.split('\n');
    const sum = calories.reduce((acc2, calorie) => {
      return acc2 + Number(calorie);
    }, 0);

    return sum > acc ? sum : acc;
  }, 0);
  // }
  return largestSum;
};

const findSumOfThreeLargest = (file) => {
  const fileContent = readFileContent(file);

  const lutins = fileContent.split('\n\n');

  const sums = lutins
    .map((lutin) => {
      const calories = lutin.split('\n');
      const sum = calories.reduce((acc2, calorie) => {
        return acc2 + Number(calorie);
      }, 0);

      return sum;
    })
    .sort((a, b) => b - a);

  return sums[0] + sums[1] + sums[2];
};

export const part1 = (file) => {
  return findLargestSum(file);
};

export const part2 = (file) => {
  return findSumOfThreeLargest(file);
};

//Should be 24000 with data-test
console.log('Test part1', part1('./data-test.txt'));

//Should be 74394 with data
console.log('Test part1', part1('./data.txt'));

//Should be 45000 with data-test
console.log('Test part2', part2('./data-test.txt'));

//Should be 212836 with data
console.log('Test part2', part2('./data.txt'));
