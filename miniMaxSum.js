function miniMaxSum(arr) {
  const [minElement, maxElement] = [Math.min(...arr), Math.max(...arr)];
  const arrMinElementFiltered = arr.filter(
    (i, j) => j != arr.findIndex((i) => i == minElement)
  );
  const arrMaxElementFiltered = arr.filter(
    (i, j) => j != arr.findIndex((i) => i == maxElement)
  );
  const sumArr = (n1, n2) => BigInt(n1) + BigInt(n2);
  const min = arrMaxElementFiltered.reduce(sumArr);
  const max = arrMinElementFiltered.reduce(sumArr);
  const str = min + " " + max;
  console.log(str);
}
