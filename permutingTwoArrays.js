function twoArrays(k, A, B) {
  const C = A.sort((m, n) => m - n);
  const D = B.sort((m, n) => n - m);
  for (let i = 0; i < A.length; i++) {
    if (C[i] + D[i] < k) {
      return "NO";
    }
  }
  return "YES";
}
