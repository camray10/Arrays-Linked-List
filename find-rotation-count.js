function findRotationCount(arr) {
  const n = arr.length;
  let low = 0;
  let high = n - 1;

  // If the array is already sorted, return 0
  if (arr[low] < arr[high]) {
    return 0;
  }

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    // If the middle element is the smallest element, return its index
    if (arr[mid] < arr[mid - 1]) {
      return mid;
    }
    // If the middle element is greater than the last element, search in the right half of the array
    else if (arr[mid] > arr[high]) {
      low = mid + 1;
    }
    // Otherwise, search in the left half of the array
    else {
      high = mid - 1;
    }
  }

  return -1; // Element not found
}


module.exports = findRotationCount