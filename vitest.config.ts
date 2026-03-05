import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [
		react(),
		{
			name: "asset-mock",
			enforce: "pre",
			resolveId(id) {
				if (id.endsWith(".svg")) {
					return "\0virtual:svg-mock";
				}
			},
			load(id) {
				if (id === "\0virtual:svg-mock") {
					return 'export default ""';
				}
			},
		},
	],
	resolve: {
		alias: {
			"@lib": resolve(__dirname, "src/lib"),
			"@tests": resolve(__dirname, "__tests__"),
		},
	},
	test: {
		globals: true,
		environment: "happy-dom",
		setupFiles: "setup.ts",
	},
});
