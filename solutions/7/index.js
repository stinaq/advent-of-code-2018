const fs = require("fs");

const fileName7 = __dirname + "/input.txt";
const content7 = fs.readFileSync(fileName7, "utf8");
const allSteps = content7.split(/\r?\n/);

let allStepsFormatted = allSteps.map(stringStep => {
  const lowerCasedStart =
    stringStep.substr(0, 1).toLowerCase() +
    stringStep.substr(1, stringStep.length - 1);
  const regex = /[A-Z]/g;
  return lowerCasedStart.match(regex);
  console.log(found);
});

let allLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
let sortedLetters = [];

while (allLetters.length) {
  // hitta de som inte har något till sig, alltså de som inte finns till höger
  let allSecondSteps = [];
  // hitta unika andra steg
  allStepsFormatted.forEach(step => {
    if (!allSecondSteps.includes(step[1])) {
      allSecondSteps.push(step[1]);
    }
  });

  // hitta alla som inte har en referens till sig
  const allStepsWithNoReference = allLetters.filter(
    letter => !allSecondSteps.includes(letter)
  );
  allStepsWithNoReference.sort();

  // om den senaste som sorterades fortfarande har referenser till sig så måste man fortsätta med den
  let letterToRemove;
  let lastLetterToBeSorted = sortedLetters[sortedLetters.length - 1];
  if (allStepsWithNoReference.includes(lastLetterToBeSorted)) {
    letterToRemove = lastLetterToBeSorted;
  } else {
    letterToRemove = allStepsWithNoReference[0];
  }

  sortedLetters.push(letterToRemove);

  allStepsFormatted = allStepsFormatted.filter(
    step => step[0] !== letterToRemove
  );
  allLetters = allLetters.filter(letter => letter !== letterToRemove);
}
const result = sortedLetters.join("");
console.log(`The result is: ${result}`);
