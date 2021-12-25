function matchingStrings(strings, queries) {
  let results = [];
  for (let i = 0; i < queries.length; i++) {
    let count = 0;
    for (let j = 0; j < strings.length; j++) {
      if (queries[i] == strings[j]) {
        count++;
      }
    }
    results.push(count);
  }
  return results;
}
