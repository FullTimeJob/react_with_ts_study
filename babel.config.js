module.exports = {
    presets: ["@babel/preset-react"],
    plugins: [
        [
            "module-resolver",
            {
                root: ["."],
                extensions: [
                    ".ios.ts",
                    ".android.ts",
                    ".ts",
                    ".ios.tsx",
                    ".android.tsx",
                    ".tsx",
                    ".jsx",
                    ".js",
                    ".json",
                ],
                alias: {
                    "~": "./src",
                },
            },
        ],
    ],
}