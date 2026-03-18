import { beforeAll, describe, expect, onTestFailed, test } from 'vitest';

describe('fibonacci', () => {
  let f: (n: number) => number;

  beforeAll(async () => {
    //@ts-expect-error - dynamic import to ensure the alias works in tests
    const module = await import('@lib/fibonacci');
    f = module.fibonacci;
  });

  const cases = [
    {
      n: 0,
      expected: 0,
    },
    {
      n: 1,
      expected: 1,
    },
    {
      n: 2,
      expected: 1,
    },
    {
      n: 3,
      expected: 2,
    },
    {
      n: 4,
      expected: 3,
    },
    {
      n: 5,
      expected: 5,
    },
    {
      n: 6,
      expected: 8,
    },
    {
      n: 7,
      expected: 13,
    },
    {
      n: 8,
      expected: 21,
    },
  ];

  test.for(cases)('Fibonacci of ($n) should be ($expected)', ({ n, expected }) => {
    const result = f(n);
    expect(result).toBe(expected);

    onTestFailed(({ task }) =>
      console.log(`Fibonnaci failed at: ${n} | Got ${result} but expected: ${expected}`, task)
    );
  });
});
