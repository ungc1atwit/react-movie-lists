export default {
    "env": { //Sets actual environment and use es6 functions
        "browser": true,
        "es6": true
    },
    "parserOptions": { //Add extra configuration for using jsx and modern Javascript
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "extends": ["eslint:recommended", "plugin:react/recommended"]
};
