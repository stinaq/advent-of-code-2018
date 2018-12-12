// Step C must be finished before step A can begin.
// Step C must be finished before step F can begin.
// Step A must be finished before step B can begin.
// Step A must be finished before step D can begin.
// Step B must be finished before step E can begin.
// Step D must be finished before step E can begin.
// Step F must be finished before step E can begin.

[c, a, b, d, e, f];

// om endast den första finns i listan, kolla vilka som är inlagda där redan,
// sortera in den bland dem

// om endast den andra finns i listan,

// om båda finns i listan så måste man kanske flytta den som ska vara först, och
// ta med alla som är sagda att vara efter den

c: a, f;
a: b, d;
b: e;
d: e;
f: e;

const result = [];

a: [b, d];
c: [a, f];
b: [e];
d: [e];
f: [e];
