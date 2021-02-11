export default {
    "parser": "@babel/eslint-parser",
    "env": { //Sets actual environment and use es6 functions
        "browser": true,
        "es6": true
    },
    "parserOptions": { //Add extra configuration for using jsx and modern Javascript
        "ecmaVersion": 6,
        "sourceType": "module",
        "allowImportExportEverywhere": true,
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "plugins": [
        "react"
    ],
    "extends": ["eslint:recommended", "plugin:react/recommended"]
}
