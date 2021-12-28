function sockMerchant(n, ar) {
  let freqArr = new Array(100);
  freqArr.fill(0);
  for (let i = 0; i < ar.length; i++) {
    freqArr[ar[i] - 1]++;
  }
  console.log(freqArr);
  let count = 0;
  for (let i = 0; i < freqArr.length; i++) {
    if (freqArr[i] % 2 !== 0) {
      count++;
    }
  }
  return (n - count) / 2;
}
