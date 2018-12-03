#!/usr/bin/env node
const fs = require("fs");

console.log("=======================");
console.log("ADVENT OF CODE");
console.log("=======================");

console.log("DAY 1");
const fileName1 = __dirname + "/1/input.txt";
const content1 = fs.readFileSync(fileName1, "utf8");
const one = require("./1");
one.part1(content1);
one.part2(content1);

console.log("");
console.log("DAY 2");
const fileName2 = __dirname + "/2/input.txt";
const content2 = fs.readFileSync(fileName2, "utf8");
const two = require("./2");
two.part1(content2);
two.part2(content2);
