function group(input) {
  const groupedLetters = {};
  input.split("").forEach(letter => {
    if (groupedLetters[letter]) {
      groupedLetters[letter]++;
    } else {
      groupedLetters[letter] = 1;
    }
  });
  return Object.keys(groupedLetters)
    .map(letter => groupedLetters[letter])
    .filter(amount => amount === 2 || amount === 3);
}

const part1 = content => {
  const allIds = content.split(/\r?\n/);
  let twos = 0;
  let threes = 0;
  allIds.forEach(id => {
    const amounts = group(id);
    if (amounts.includes(2)) {
      twos++;
    }
    if (amounts.includes(3)) {
      threes++;
    }
  });
  console.log(`Checksum is ${twos * threes}`);
};

const isSimilar = (currentId, comparisonId) => {
  let errorPoints = 0;
  const compIdLetters = comparisonId.split("");
  currentId.split("").forEach((letter, index) => {
    if (letter !== compIdLetters[index]) errorPoints++;
  });
  if (errorPoints === 1) {
    return true;
  }
};

const part2 = content => {
  const allIds = content.split(/\r?\n/);

  const similarIds = allIds.filter(id => {
    let hasFriend = false;
    allIds.forEach(innerId => {
      if (isSimilar(id, innerId)) {
        hasFriend = true;
      }
    });
    return hasFriend;
  });

  const commonLetters = similarIds[0]
    .split("")
    .filter((letter, index) => letter === similarIds[1][index])
    .join("");

  console.log(`The common letters are ${commonLetters}`);
};

module.exports = { part1, part2 };
