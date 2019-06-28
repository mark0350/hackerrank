/**
 * check whether an array is a consecutive subset of the other array
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

function isDiscontinuousSubset(sub, a) {
  let j = 0;
  for (let i = 0; i < sub.length; i++) {
    // check if sub array has been already longer than original array
    if (a.length - j < sub.length - i) {
      return false;
    }
    while (true) {
      if (sub[i] === a[j]) {
        j++;
        break;
      }
      if (++j >= a.length) {
        return false;
      }

    }
  }

  return true;
}

const testCase = [
  [[1, 2, 3, 4], [1, 2, 3, 4]],
  [[1, 2, 3], [1, 2, 3, 4]],
  [[1, 2, 4], [1, 2, 3, 4]],
  [[1, 2, 3, 4, 5], [1, 2, 3, 4]],
  [[3, 4], [1, 2, 3]],
  [[1], [2]],
  [[1, 2], [2]],
  [[2, 2, 2, 2], [2, 2, 2]],
  [[1, 7, 9], [1, 9, 7, 6]],
  [[1, 7, 9], [1, 3, 1, 7, 6, 9]],
  [[1, 7, 9], [9, 1, 7, 1, 7, 10, 9, 11, 14]],
];

testCase.forEach(v => {
  console.log(`${v[0]} is${isSubsetOfArray(...v) ? ' ' : ' not '}subset of ${v[1]}`);
});
console.log('isDiscontinuousSubset start');
testCase.forEach(v => {
  console.log(`${v[0]} is${isDiscontinuousSubset(...v) ? ' ' : ' not '}subset of ${v[1]}`);
});