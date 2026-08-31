// Standard yarn weight categories with representative wraps-per-inch (WPI).
// Holding two strands together roughly adds their diameters, and diameter
// is roughly proportional to 1/WPI, so combined WPI follows the same math
// as resistors in parallel: 1/Wc = 1/W1 + 1/W2.
const YARN_WEIGHTS = [
  { name: "Lace", wpi: 30 },
  { name: "Fingering", wpi: 14 },
  { name: "Sport", wpi: 12 },
  { name: "DK", wpi: 11 },
  { name: "Worsted", wpi: 9 },
  { name: "Bulky", wpi: 7 },
  { name: "Super Bulky", wpi: 5 },
  { name: "Jumbo", wpi: 3 },
];

function combinedWPI(wpi1, wpi2) {
  return (wpi1 * wpi2) / (wpi1 + wpi2);
}

function nearestYarnWeight(wpi) {
  let best = YARN_WEIGHTS[0];
  let bestDiff = Infinity;
  for (const w of YARN_WEIGHTS) {
    const diff = Math.abs(w.wpi - wpi);
    if (diff < bestDiff) {
      bestDiff = diff;
      best = w;
    }
  }
  return best;
}
