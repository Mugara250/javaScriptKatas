function digPow(n: number, p: number): number {
  const sum = String(n).split("").map((num, index) => Math.pow(+num, p + index)).reduce((sum, num) => sum + +num, 0);
  if (sum % n === 0) return sum / n;
  return -1;
}
