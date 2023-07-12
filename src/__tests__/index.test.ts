import { helloWorld } from "@/index";

describe("Hello World", () => {
	test("provides the string 'Hello World'", () => {
		const result = helloWorld();

		expect(result).toBe("Hello World");
	});
});
