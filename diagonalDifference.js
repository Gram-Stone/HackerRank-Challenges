function diagonalDifference(arr) {
  let [ltr, rtl] = [0, 0];
  for (let i = 0; i < arr.length; i++) {
    ltr += arr[i][i];
  }
  for (let i = 0, j = arr.length - 1; i < arr.length; i++, j--) {
    rtl += arr[i][j];
  }
  return Math.abs(ltr - rtl);
}
