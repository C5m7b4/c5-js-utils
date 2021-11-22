# c5-js-utils [![CircleCI](https://circleci.com/gh/C5m7b4/c5-js-utils/tree/main.svg?style=svg)](https://circleci.com/gh/C5m7b4/c5-js-utils/tree/main)

A group of javascript utilites for validating strings and objects/dates, as well as formatting dates an times.

## Installation

```js
# using npm
npm install c5-js-utils

# using yarn
yarn add c5-js-utils
```

## Usage

```js
# using require
const {
  isValid,
  isValidDate,
  formatDate,
  pad,
  getDayOfWeek,
  addDays,
  formatTimeString,
  formatMoney
} = require("c5-js-utils");

# using import
import {
  isValid,
  isValidDate,
  formatDate,
  pad,
  getDayOfWeek,
  addDays,
  formatTimeString,
  formatMoney
} from 'c5-js-utils';
```

## Example

### Javascript examples:

```js
const someString = "hello;
console.log(isValid(someString));


```
