function deleteNth(arr: number[], n: number): number[] {
  const numCount = {};
  for (let i = 0; i < arr.length; i++) {
    numCount[arr[i]] ? numCount[arr[i]]++ : numCount[arr[i]] = 1;
    if (numCount[arr[i]] > n) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
}
