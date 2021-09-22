module.exports = {
	globalSetup: "<rootDir>/test/index.js",
	transform: {
		"^.+\\.ts$": "ts-jest",
		"^.+\\.[j]sx?$": "babel-jest",
	},
	bail: 20,
	verbose: true,
	testEnvironment: "node",
	testRegex: "\\.(test|spec)?\\.(ts|tsx)$",
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
	setupFilesAfterEnv: ["./jest.setup.js"],
};
