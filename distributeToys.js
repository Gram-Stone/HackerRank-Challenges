// n kids are sitting in a circle
// k toys are available to distribute
// i position to start from

// 3, 5, 1 => 2
// 5, 3, 1 => 3

function getLastKid(n, k, i) {
  return (k % n) + (i - 1);
}

console.log(getLastKid(2, 2, 1));
