import { act, renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { useArray } from "./UseArray";

describe("useArray - Suite", () => {
	const startingArray: unknown[][] = [
		[1, 2, 3],
		["a", "b", "c"],
		[true, false, true],
		[{ id: 1 }, { id: 2 }, { id: 3 }],
		[
			[1, 2],
			[3, 4],
			[5, 6],
		],
		[{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }],
		[new Set([1, 2]), new Set([3, 4]), new Set([5, 6])],
		[
			new Map([
				["key1", "value1"],
				["key2", "value2"],
			]),
			new Map([
				["key3", "value3"],
				["key4", "value4"],
			]),
			new Map([
				["key5", "value5"],
				["key6", "value6"],
			]),
		],
		[new Date("2021-01-01"), new Date("2022-01-01"), new Date("2023-01-01")],
		[/abc/, /def/, /ghi/],
	];

	it.for(
		startingArray,
	)("%$ | the array is initialized correctly", (testCase) => {
		const { result } = renderHook(() => useArray(testCase));

		expect(result.current.array).toEqual(testCase);
	});

	it.for(startingArray)("pushes an element to the array", (testCase) => {
		const { result } = renderHook(() => useArray(testCase));

		act(() => {
			result.current.push(testCase.at(-1));
		});

		expect(result.current.array).toEqual([...testCase, testCase.at(-1)]);
	});

	it.for(
		startingArray,
	)("filters the array based on a condition", (testCase) => {
		const { result } = renderHook(() => useArray(testCase));

		act(() => {
			result.current.filter((_, index) => index % 2 === 0);
		});

		expect(result.current.array).toEqual(
			testCase.filter((_, index) => index % 2 === 0),
		);
	});

	it.for(
		startingArray,
	)("removes an element at a specific index", (testCase) => {
		const { result } = renderHook(() => useArray(testCase));

		act(() => {
			result.current.remove(1);
		});

		expect(result.current.array).toHaveLength(testCase.length - 1);
		expect(result.current.array).toEqual(
			testCase.filter((_, index) => index !== 1),
		);
	});

	it.for(startingArray)("clears the array", (testCase) => {
		const { result } = renderHook(() => useArray(testCase));

		act(() => {
			result.current.clear();
		});

		expect(result.current.array).toHaveLength(0);
		expect(result.current.array).toEqual([]);
	});
});
