/**
 * check whether array sub is a subset of array a
 */
function isSubsetOfArray(sub, a) {
  const subLen = sub.length;
  const arrLen = a.length;
  let i = 0;
  let j = 0;
  while (j < arrLen) {
    if (sub[i] !== a[j]) {
      j++;
      i = 0;
    } else {
      j++;
      // todo @note ++i denotes plus one first then compare
      if (++i >= subLen) {
        return true;
      }
    }
  }
  return false;
}

const testCase = [
  [[1, 2, 3, 4], [1, 2, 3, 4]],
  [[1, 2, 3], [1, 2, 3, 4]],
  [[1, 2, 4], [1, 2, 3, 4]],
  [[1, 2, 3, 4, 5], [1, 2, 3, 4]],
  [[3, 4], [1, 2, 3]],
  [[1], [2]],
  [[1, 2], [2]],
  [[2, 2, 2, 2], [2, 2, 2]]
];

testCase.forEach(v => {
  console.log(isSubsetOfArray(...v));
});