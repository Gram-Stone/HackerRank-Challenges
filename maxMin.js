function maxMin(k, arr) {
  const sorted = arr.sort((m, n) => m - n);
  let min = Infinity;
  for (let i = 0; i + k <= arr.length; i++) {
    const slice = sorted.slice(i, i + k);
    min = Math.min(min, slice[k - 1] - slice[0]);
  }
  return min;
}
