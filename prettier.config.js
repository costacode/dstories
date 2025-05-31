export default {
	printWidth: 100,
	semi: true,
	singleQuote: false,
	tabWidth: 4,
	useTabs: true,
	trailingComma: "es5",
	endOfLine: "auto",
	plugins: ["prettier-plugin-astro"],
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
	],
};
