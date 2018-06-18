module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "never"
        ]
    },
        "editor.tabSize": 2,
        "editor.formatOnSave": true,
        "editor.formatOnPaste": true,
        "prettier.eslintIntegration": true,
        "javascript.format.enable": false,
        "javascript.validate.enable": false,
        "files.associations": {
          "*.jsx": "javascriptreact",
          "*.js": "javascriptreact"
        },
        "emmet.syntaxProfiles": {
          "javascript": "jsx"
        }    
};