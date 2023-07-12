import { defaults } from "jest-config";

const jestConfig = {
	...defaults,
	transform: {
		"^.+\\.(t|j)sx?$": ["@swc/jest"],
	},
	extensionsToTreatAsEsm: [".ts"],
	moduleNameMapper: {
		"^@/(.*)$": "<rootDir>/src/$1",
	},
};

export default jestConfig;
