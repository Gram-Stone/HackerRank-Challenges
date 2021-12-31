// Naive brute force algorithm
function maxMin(k, arr) {
  const sortedArr = arr.sort((m, n) => m - n);
  let min = Infinity;
  for (let i = 0; i + k <= arr.length; i++) {
    min = Math.min(min, sortedArr[i + k - 1] - sortedArr[i]);
  }
  return min;
}

// Binary search version that is failing a few tests
function maxMinBinarySearch(k, arr) {
  const sortedArr = arr.sort((m, n) => m - n);

  if (sortedArr[arr.length - 1] - sortedArr[0] == 0) {
    return 0;
  }

  function bruteForceSearch(firstIndex, secondIndex) {
    const length = secondIndex - firstIndex + 1;
    let min = Infinity;
    for (let i = 0; i + k <= length; i++) {
      const delta =
        sortedArr[firstIndex + i + k - 1] - sortedArr[firstIndex + i];
      if (delta == 0) {
        return 0;
      } else {
        min = Math.min(min, delta);
      }
    }
    return min;
  }

  function binarySearch(firstIndex, secondIndex) {
    const length = secondIndex - firstIndex + 1;
    if (length > 2 * k) {
      const midpoint = length % 2 == 0 ? length / 2 : Math.floor(length / 2);
      const [firstHalf, secondHalf, miss] = [
        [firstIndex, midpoint],
        [midpoint + 1, secondIndex],
        [midpoint - k - 1, midpoint + k - 2],
      ];
      const [deltaFirstHalf, deltaSecondHalf] = [
        sortedArr[firstHalf[1]] - sortedArr[firstHalf[0]],
        sortedArr[secondHalf[1]] - sortedArr[secondHalf[0]],
      ];
      if (deltaFirstHalf == 0 || deltaSecondHalf == 0) {
        return 0;
      } else if (deltaFirstHalf == deltaSecondHalf) {
        return [
          bruteForceSearch(...miss),
          binarySearch(...firstHalf),
          binarySearch(...secondHalf),
        ];
      } else if (deltaFirstHalf < deltaSecondHalf) {
        return [bruteForceSearch(...miss), binarySearch(...firstHalf)];
      } else {
        return [bruteForceSearch(...miss), binarySearch(...secondHalf)];
      }
    } else {
      return bruteForceSearch(firstIndex, secondIndex);
    }
  }

  const result = binarySearch(0, arr.length - 1);
  if (Number.isInteger(result)) {
    return result;
  } else {
    return Math.min(...result.flat(Infinity));
  }
}
