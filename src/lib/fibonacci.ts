// simple recursive implementation with proper base cases
export function fibonacci(n: number): number {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// (an iterative implementation could be added later for performance)
