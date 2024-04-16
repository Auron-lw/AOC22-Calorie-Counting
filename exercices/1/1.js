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
  // 🦁 Utilise readFileContent pour lire le fichier et stocke-le dans une variable fileContent
  const fileContent = readFileContent(file);

  // 🦁 Trouve les lutins en utilisant `.split("\n\n")`pour mac ou `.split("\r\n\r\n")` pour windows dans notre liste
  const lutins = fileContent.split('\n\n');

  // 🦁 Initialise une variable largestSum à 0
  let largestSum = 0;
  // 🦁 Pour chaque lutin (boucle for)
  for (let i = 0; i < lutins.length; i++) {
    // 🦁   Trouve les calories en utilisant `.split("\n")`pour mac ou `.split("\r\n")` pour windows dans notre liste
    const calories = lutins[i].split('\n');
    console.log(calories);

    // 🦁   Initialise une variable sum à 0
    let sum = 0;
    // 🦁   Pour chaque calorie (boucle for)
    for (let j = 0; j < calories.length; j++) {
      // 🦁     Ajoute la calorie à la variable sum
      sum += Number(calories[j]);
    }
    console.log(sum);

    // 🦁   Si la variable sum est plus grande que la variable largestSum
    if (sum > largestSum) {
      // 🦁     Mets la variable sum dans la variable largestSum
      largestSum = sum;
    }
  }
  // 🦁 Retourne la variable largestSum
  return largestSum;
};

export const part1 = (file) => {
  return findLargestSum(file);
};

// À faire après
export const part2 = (file) => {
  // 🦁 Pour la partie 2, utilise la fonction ici
  return 0;
};

//Should be 24000 with data-test
console.log('Test part1', part1('./data-test.txt'));

//Should be 74394 with data
console.log('Test part1', part1('./data.txt'));

//Should be 45000 with data-test
console.log('Test part2', part2('./data-test.txt'));

//Should be 212836 with data
console.log('Test part2', part2('./data.txt'));
