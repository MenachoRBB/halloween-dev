function findSafestPath(dream) {
  const rows = dream.length;
  const cols = dream[0].length;

  const danger = Array.from({ length: rows }, () => Array(cols).fill(Infinity));
  danger[0][0] = dream[0][0];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (i > 0) {
        danger[i][j] = Math.min(danger[i][j], danger[i - 1][j] + dream[i][j]);
      }
      if (j > 0) {
        danger[i][j] = Math.min(danger[i][j], danger[i][j - 1] + dream[i][j]);
      }
    }
  }

  return danger[rows - 1][cols - 1];
}

const dream = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1]
];

const bestPath = findSafestPath(dream);
console.log(bestPath); // Debería devolver 7
