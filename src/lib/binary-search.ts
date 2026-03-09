type Primitive = number | string | boolean;

const compare = (a: Primitive, b: Primitive) => a > b ? 1 : a < b ? -1 : 0;

// overload 1: primitive -> compareFn optional
export function binarySearch<T extends Primitive>(
  list: T[],
  target: T,
  compareFn?: (a: T, b: T) => number
): number;

export function binarySearch<T>(
  list: T[],
  target: T,
  compareFn: (a: T, b: T) => number
): number;

export function binarySearch<T>(
  list: T[],
  target: T,
  compareFn?: (a: T, b: T) => number
): number {
  const cmp = compareFn ?? (compare as (a: T, b: T) => number); // Should make sure T is Primitive when compareFn is not provided, but TypeScript can't enforce this at runtime. Can we do it with a type guard or Zod?


  let l = 0;
  let h = list.length - 1;

  while (l <= h) {
    const m = Math.floor((l + h) / 2);
    const guess = list[m];
    const result = cmp(guess, target);

    if (result === 0) return m;
    if (result > 0) h = m - 1;
    else l = m + 1;
  }

  return -1;
}
