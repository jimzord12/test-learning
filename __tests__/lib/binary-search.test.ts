import { binarySearch } from '@/lib/binary-search';
import { describe, expect, test } from '@jest/globals';

describe('binarySearch', () => {
  test('should find the index of a number in a sorted array', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(binarySearch(arr, 3)).toBe(2);

  })});