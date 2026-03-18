export type JSType =
	| "null"
	| "undefined"
	| "array"
	| "date"
	| "regexp"
	| "map"
	| "set"
	| "weakmap"
	| "weakset"
	| "number"
	| "string"
	| "boolean"
	| "function"
	| "object"
	| "unknown";

export const getType = (value: unknown): JSType => {
	if (value === null) return "null" as JSType;
	if (value === undefined) return "undefined" as JSType;
	if (Array.isArray(value)) return "array" as JSType;
	if (value instanceof Date) return "date" as JSType;
	if (value instanceof RegExp) return "regexp" as JSType;
	if (value instanceof Map) return "map" as JSType;
	if (value instanceof Set) return "set" as JSType;
	if (value instanceof WeakMap) return "weakmap" as JSType;
	if (value instanceof WeakSet) return "weakset" as JSType;
	if (value instanceof Number) return "number" as JSType;
	if (value instanceof String) return "string" as JSType;
	if (value instanceof Boolean) return "boolean" as JSType;
	if (value instanceof Function) return "function" as JSType;
	if (value instanceof Object) return "object" as JSType;
	return "unknown" as JSType;
};
