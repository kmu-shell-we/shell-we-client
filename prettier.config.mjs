const prettierConfig = {
    "semi" : true,
    "singleQuote" : true,
    "tabWidth": 2,
    "useTabs": false,
    "trailingComma": "es5",
    "bracketSpacing": true,
    "arrowParens": "always",
    "printWidth": 100,
    "endOfLine": "lf",
    "jsxSingleComma": false,
    "quoteProps": "as-needed",
    "plugins": ["prettier-plugin-tailwindcss", "@trivago/pettier-plugin-sort-imports"],
    "importOrder": [
        "^react$",
        "^next",
        "<THIRD_PARTY_MODULES>",
        "^@/hooks",
        "^@/store",
        "^@/lib",
        "^@/api",
        "^@/components",
        "^@/styles",
        "^@/public",
        "^[./]"
    ],
    "importOrderSeparation": true,
    "importOrderSortSpecifiers": true
};

export default prettierConfig;