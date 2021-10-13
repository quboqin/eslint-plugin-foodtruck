# eslint-plugin-qinqubo

eslint plugin demo

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-qinqubo`:

```sh
npm install eslint-plugin-qinqubo --save-dev
```

## Usage

Add `qinqubo` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "qinqubo"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "qinqubo/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here


