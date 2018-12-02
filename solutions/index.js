#!/usr/bin/env node
const fs = require("fs");

console.log("=======================");
console.log("ADVENT OF CODE");
console.log("=======================");

console.log("DAY 1");
const fileName = __dirname + "/1/input.txt";
const content = fs.readFileSync(fileName, "utf8");
const one = require("./1");
one.part1(content);
one.part2(content);
