module.exports = {
	arrowParens: "always",
	htmlWhitespaceSensitivity: "css",
	jsxBracketSameLine: false,
	jsxSingleQuote: false,
	printWidth: 80,
	proseWrap: "preserve",
	quoteProps: "as-needed",
	semi: false,
	singleQuote: false,
	parser: "typescript",
	tabWidth: 4,
	trailingComma: "all",
	useTabs: true,
	bracketSpacing: true,
	overrides: [
		{
			files: "*.json",
			options: {
				printWidth: 120,
			},
		},
	],
}
