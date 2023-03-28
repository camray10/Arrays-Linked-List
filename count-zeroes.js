function countZeroes(arr) {
  let left = 0;
  let right = arr.length - 1;
  let mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (arr[mid] === 1) {
      left = mid + 1;
    } else {
      // arr[mid] === 0
      if (mid === 0 || arr[mid - 1] === 1) {
        return arr.length - mid;
      } else {
        right = mid - 1;
      }
    }
  }

  return 0;
}


module.exports = countZeroes