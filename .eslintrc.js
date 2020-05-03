/**
* @file: test
 * @author: zhangyadi@baidu.com
 * @Date: 2020-04-27 12:08:51
 * @Last Modified by: zhangyadi@baidu.com
 * @Last Modified time: 2020-04-27 17:29:44
 */

module.exports = {
    'extends': [
        'alloy',
        'alloy/react',
        'alloy/typescript',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:import/typescript'
    ],
    'env': {
        // Your environments (which contains several predefined global variables)
        //
        // browser: true,
        // node: true,
        // mocha: true,
        // jest: true,
        // jquery: true
    },
    'globals': {
        React: true
        // Your global variables (setting to false means it's not allowed to be reassigned)
        //
        // myGlobal: false
    },
    'rules': {
        // Customize your rules
        '@typescript-eslint/explicit-member-accessibility': 'off',
        // 'no-unused-vars': 'off',
        'no-undef': ['off'],
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error'
        // 'typescript/no-unused-vars': ['error', { 'vars': 'all', 'args': 'after-used', 'ignoreRestSiblings': false }]
    },
    'settings': {
        react: {
            version: 'detect',
            pragma: 'React',
            createClass: 'createReactClass'
        }
    },
    'plugins': [
        'react'
    ],
    'parserOptions': {
        ecmaFeatures: {
            jsx: true
        }
    }
};