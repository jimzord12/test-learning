import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Example from "../../src/components/Example";

describe("Example component", () => {
	it("renders the component", () => {
		render(<Example />);
		const element = screen.getByText("Vite + React");

		expect(element).toBeInTheDocument();
	});
});
