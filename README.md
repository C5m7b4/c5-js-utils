# c5-js-utils

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
} = require("./index");

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
