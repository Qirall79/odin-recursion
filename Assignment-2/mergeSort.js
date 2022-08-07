function mergeSort(arr) {
  if (arr.length < 2) return arr;

  let sortedRight = mergeSort(arr.slice(0, Math.floor(arr.length / 2)));
  let sortedLeft = mergeSort(arr.slice(Math.floor(arr.length / 2)));

  return merge(sortedLeft, sortedRight);
}

// Merges 2 sorted arrays
function merge(left, right) {
  let merged = [];
  let i = 0;
  let j = 0;

  // Continue until one array is empty
  while (left.length !== i && right.length !== j) {
    // Insert smallest element into merged array
    if (left[i] < right[j]) {
      merged.push(left[i]);
      i++;
    } else {
      merged.push(right[j]);
      j++;
    }
  }
  // insert remaining array to merged array
  if (left.length === i) {
    merged = merged.concat(right.slice(j));
  } else {
    merged = merged.concat(left.slice(i));
  }

  return merged;
}
