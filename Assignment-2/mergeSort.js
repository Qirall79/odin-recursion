function mergeSort(arr) {
  if (arr.length < 2) return arr;

  let sortedRight = mergeSort(arr.slice(0, Math.floor(arr.length / 2)));
  let sortedLeft = mergeSort(arr.slice(Math.floor(arr.length / 2)));

  return merge(sortedLeft, sortedRight);
}

console.log(mergeSort([1, 7, 4, 5]));

// Merges 2 sorted arrays
function merge(left, right) {
  let merged = [];
  let i = 0;
  let j = 0;
  while (left.length !== i && right.length !== j) {
    if (left[i] < right[j]) {
      merged.push(left[i]);
      i++;
    } else {
      merged.push(right[j]);
      j++;
    }
  }
  if (left.length === i) {
    merged = merged.concat(right.slice(j));
  } else {
    merged = merged.concat(left.slice(i));
  }

  return merged;
}
