function countingSort(arr) {
  let frequencyArr = new Array(100);
  frequencyArr.fill(0);
  for (let i = 0; i < arr.length; i++) {
    frequencyArr[arr[i]]++;
  }
  return frequencyArr;
}
