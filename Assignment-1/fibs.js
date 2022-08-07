function fibs(n) {
  if (n < 2) return;

  let output = [0, 1];

  for (let i = 0; i < n - 2; i++) {
    const length = output.length;
    output.push(output[length - 1] + output[length - 2]);
  }
  return output;
}

console.log(fibs(8));
