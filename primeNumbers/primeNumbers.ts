function isPrime(num: number): boolean {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function getPrime(start: number, finish: number): string {
  if (start >= finish) {
    let startNew = start;
    start = finish;
    finish = startNew;
    // console.log(start, finish);
  }
  const result: number[] = [];
  for (let i = start; i <= finish; i++) {
    if (isPrime(i)) {
      result.push(i);
    }
  }
  return result.join(",");
}
