const part1 = content => {
  const allClaims = content.split(/\r?\n/);

  let maxWidth = 0;
  let maxHeight = 0;

  const formattedClaims = allClaims.map(claim => {
    const numbers = claim.split("@")[1].split(",");
    const id = claim.split("#")[1].split("@")[0];
    const secondPart = numbers[1].split(":");
    const thirdPart = secondPart[1].split("x");

    const x1 = Number(numbers[0]);
    const y1 = Number(secondPart[0]);
    const x2 = x1 + Number(thirdPart[0]);
    const y2 = y1 + Number(thirdPart[1]);

    if (x2 > maxWidth) {
      maxWidth = x2;
    }
    if (y2 > maxHeight) {
      maxHeight = y2;
    }

    return {
      id,
      x1,
      y1,
      x2,
      y2
    };
  });

  const fabric = new Array(maxHeight);
  for (let i = 0; i < fabric.length; i++) {
    fabric[i] = new Array(maxWidth);
  }

  formattedClaims.forEach(claim => {
    for (let rowIndex = claim.y1; rowIndex < claim.y2; rowIndex++) {
      for (let columnIndex = claim.x1; columnIndex < claim.x2; columnIndex++) {
        if (fabric[rowIndex][columnIndex]) {
          fabric[rowIndex][columnIndex].amount++;
        } else {
          fabric[rowIndex][columnIndex] = {
            amount: 1
          };
        }
      }
    }
    console.log(fabric);
  });

  const flattenedFabric = [].concat.apply([], fabric).filter(Boolean);
  const numberOfOverlapping = flattenedFabric.filter(hit => hit.amount > 1)
    .length;
  console.log(`Number of overlapping claims: ${numberOfOverlapping}`);
};

module.exports = { part1 };
