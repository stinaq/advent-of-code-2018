const part1 = content => {
  const allClaims = content.split(/\r?\n/);

  let maxWidth = 0;
  let maxHeight = 0;

  const formattedClaims = allClaims.map(claim => {
    const numbers = claim.split("@")[1].split(",");
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
      x1,
      y1,
      x2,
      y2
    };
  });

  const rows = new Array(maxHeight);
  const fabric = [rows.map(() => new Array(maxWidth))];

  // const a = [
  //   [[],[],[]],
  //   [],
  //   []
  // ]

  console.log(formattedClaims);
  console.log(fabric);
};

module.exports = { part1 };
