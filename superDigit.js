function superDigit(n, k) {
  function sumOfDigits(n) {
    return n.split("").reduce((m, n) => parseInt(m) + parseInt(n));
  }

  if (n.length == 1) {
    return parseInt(n, 10);
  } else if (k > 1) {
    return superDigit((k * sumOfDigits(n)).toString(10), 1);
  } else {
    return superDigit(sumOfDigits(n).toString(10), 1);
  }
}
