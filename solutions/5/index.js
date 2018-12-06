const fs = require("fs");

function shouldBeDestroyed(firstLetter, secondLetter) {
  if (firstLetter === secondLetter) {
    return false;
  } else if (firstLetter.toLowerCase() === secondLetter.toLowerCase()) {
    return true;
  }
  return false;
}

function destroyFirstOccurence(input) {
  for (let index = 0; index < input.length; index++) {
    const nextLetterIndex = index + 1;

    if (index + 1 === input.length) {
      return input;
    }
    const firstLetter = input[index];
    const secondLetter = input[nextLetterIndex];
    if (shouldBeDestroyed(firstLetter, secondLetter)) {
      const firstPart = input.substr(0, index);
      const secondPart = input.substr(nextLetterIndex + 1, input.length);
      return firstPart + secondPart;
    }
  }
}

function destroy(input) {
  const reducedInput = destroyFirstOccurence(input);
  if (reducedInput === input) {
    return input;
  }
  return destroy(reducedInput);
}

const fileName5 = __dirname + "/input.txt";
const content5 = fs.readFileSync(fileName5, "utf8");

const fullyReactedPolymer = destroy(content5);
console.log(fullyReactedPolymer.length);
