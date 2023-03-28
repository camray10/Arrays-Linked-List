function sortedFrequency(arr, num) {
    // Use binary search to find the first and last occurrence of num in arr
    let first = findFirst(arr, num);
    let last = findLast(arr, num);
  
    // If num is not found, return -1
    if (first === -1 || last === -1) {
      return -1;
    }
  
    // Return the count of occurrences of num in arr
    return last - first + 1;
  }
  
  // Helper function to find the index of the first occurrence of num in arr
  function findFirst(arr, num) {
    let low = 0;
    let high = arr.length - 1;
    let mid;
  
    while (low <= high) {
      mid = Math.floor((low + high) / 2);
  
      if (arr[mid] < num) {
        low = mid + 1;
      } else if (arr[mid] > num) {
        high = mid - 1;
      } else if (mid === 0 || arr[mid - 1] !== num) {
        return mid;
      } else {
        high = mid - 1;
      }
    }
  
    return -1;
  }
  
  // Helper function to find the index of the last occurrence of num in arr
  function findLast(arr, num) {
    let low = 0;
    let high = arr.length - 1;
    let mid;
  
    while (low <= high) {
      mid = Math.floor((low + high) / 2);
  
      if (arr[mid] < num) {
        low = mid + 1;
      } else if (arr[mid] > num) {
        high = mid - 1;
      } else if (mid === arr.length - 1 || arr[mid + 1] !== num) {
        return mid;
      } else {
        low = mid + 1;
      }
    }
  
    return -1;
  }
  

module.exports = sortedFrequency