function fibsRec(n) {
  if (n <= 1) return [0];
  if (n == 2) return [0, 1];

  let result = fibsRec(n - 1);
  result.push(result[result.length - 1] + result[result.length - 2]);
  return result;
}
console.log(fibsRec(100));
