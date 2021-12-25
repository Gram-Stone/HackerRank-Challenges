function plusMinus(arr) {
  let [pos, neg, zero, n] = [0, 0, 0, arr.length];
  for (let i = 0; i < n; i++) {
    arr[i] > 0 ? (pos += 1) : arr[i] < 0 ? (neg += 1) : (zero += 1);
  }
  console.log(Number.parseFloat(pos / n).toPrecision(6));
  console.log(Number.parseFloat(neg / n).toPrecision(6));
  console.log(Number.parseFloat(zero / n).toPrecision(6));
}
