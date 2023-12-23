export const factorial = (n: number): number => {
  // 0! = 1, 1! = 1, 2! = 2, 3! = 6, 4! = 24, 5! = 120, 6! = 720, 7! = 5040, 8! = 40320, 9! = 362880, 10! = 3628800
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
};
