function pageCount(n, p) {
  if (p == 1 || (n % 2 == 0 && p == n) || (n % 2 !== 0 && p >= n - 1)) {
    return 0;
  } else if (n % 2 == 0 && p == n - 1) {
    return 1;
  } else {
    return Math.min(Math.floor(p / 2), Math.floor((n - p) / 2));
  }
}
