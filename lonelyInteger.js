function lonelyInteger(a) {
  if (a.length == 1) {
    return a[0];
  } else {
    const b = a.sort((m, n) => m - n);
    for (let i = 0; i < b.length; i++) {
      if (b[i] !== b[i + 1] && b[i + 1] !== b[i + 2]) {
        return b[i + 1];
      }
    }
  }
}
