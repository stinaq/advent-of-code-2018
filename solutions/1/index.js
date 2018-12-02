#!/usr/bin/env node

const part1 = function(content) {
  const result = content
    .split(/\r?\n/)
    .reduce((acc, current) => acc + Number(current), 0);

  console.log(`Result: ${result}`);
};

const part2 = content => {
  const seenFrequencies = {};
  const input = content.split(/\r?\n/).map(Number);
  let currentFrequency = 0;

  while (true) {
    for (const frequencyChange of input) {
      currentFrequency = currentFrequency + frequencyChange;
      if (seenFrequencies[currentFrequency]) {
        console.log(`Found duplicate: ${currentFrequency}`);
        return;
      } else {
        seenFrequencies[currentFrequency] = true;
      }
    }
  }
};

module.exports = { part1, part2 };
