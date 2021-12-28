function birthday(s, d, m) {
  let count = 0;
  const reducer = (a, b) => a + b;
  for (let i = 0; i < s.length; i++) {
    const t = s.slice(i, i + m);
    if (t.reduce(reducer) == d) {
      count++;
    }
  }
  return count;
}
