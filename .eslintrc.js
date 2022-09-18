module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
		jest: true,
	},
	extends: [
		"airbnb",
		"airbnb/hooks",
		"airbnb-typescript",
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended",
		"plugin:react/recommended",
		"prettier",
	],
	globals: {
		Atomics: "readonly",
		SharedArrayBuffer: "readonly",
	},
	parser: "@typescript-eslint/parser",
	parserOptions: {
		project: "./tsconfig.json",
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: "module",
	},
	ignorePatterns: ["**/*.config.js", ".eslintrc.js"],
	plugins: [
		"react",
		"@typescript-eslint/eslint-plugin",
		"better-styled-components",
	],
	rules: {
		"no-unused-vars": "warn",
		"react/jsx-uses-react": "warn",
		"react/jsx-uses-vars": "warn",
		"react/react-in-jsx-scope": "warn",
		"linebreak-style": 0,
		quotes: ["error", "double"],
		semi: ["error", "never"],
		"prettier/prettier": [
			"error",
			{
				endOfLine: "auto",
			},
		],
		"react/destructuring-assignment": 2,
	},
}
