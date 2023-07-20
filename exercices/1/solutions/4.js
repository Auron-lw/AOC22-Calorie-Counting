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

function findLargestSum(file) {
  const fileContent = readFileContent(file);
  const paragraphs = fileContent.split('\n\n');

  const largestSum = paragraphs.reduce((acc, paragraph) => {
    const lines = paragraph.split('\n');
    const sum = lines.reduce((acc, line) => acc + Number(line), 0);
    return sum > acc ? sum : acc;
  }, 0);

  return largestSum;
}

function findSumOfThreeLargest(file) {
  const fileContent = readFileContent(file);
  const paragraphs = fileContent.split('\n\n');
  const sums = paragraphs.map((paragraph) => {
    const lines = paragraph.split('\n');
    return lines.reduce((acc, line) => acc + +line, 0);
  });

  const sortedSums = sums.sort((a, b) => a - b);
  const threeLargest = sortedSums.slice(-3);
  const sumOfThreeLargest = threeLargest.reduce((acc, sum) => acc + sum, 0);

  return sumOfThreeLargest;
}

export const part1 = (file) => {
  return findLargestSum(file);
};

// À faire après
export const part2 = (file) => {
  return findSumOfThreeLargest(file);
};

console.log('Result 2', part1('../data.txt'));
