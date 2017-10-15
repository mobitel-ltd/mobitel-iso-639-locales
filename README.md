# Mobitel Ltd. ISO-639 Locales
NodeJs module based on ISO-639 for validate and get basic info by locale

## Attention
This module writing and testing on **NodeJs v.8+** and **NPM v.5+**.
Using the module in previous versions of NodeJs does not guarantee correct works.

## <a name="navigation">Navigation</a>

* [Installation](#installation)
* [Example](#example)
* [API](#api)
    * [.list](#list)
    * [.codeList](#code-list)
    * [.validate()](#validate)
    * [.get()](#get)
* [Testing](#testing)
* [License](#license)

## <a name="installation">Installation</a>

```
npm i --save mobitel-iso-639-locales
```
[<p align="right">up to navigation</p>](#navigation)

## <a name="example">Example</a>

```javascript
const isoLocale = required('mobitel-iso-639-locales');

// get locale list
const locales = isoLocale.list; //=> array like [{locale: 'af', name: 'Afrikaans (South Africa)'}, ...];

// get locale code list
const localeCodes = isoLocale.codeList; //=> array like ['af', 'af-ZA' ...];

// validate
const valid = isoLocale.validate('af'); //=> true
const invalid = isoLocale.validate('arr'); //=> false

// get data
const data = isoLocale.get('af-ZA'); //=> {locale: 'af', name: 'Afrikaans (South Africa)'}
const noData = isoLocale.get('af-ZARA'); //=> null
```
[<p align="right">up to navigation</p>](#navigation)

## <a name="api">API</a>

### <a name="list">.list</a>
Property - `{locale: String, name: String}[]` - contains full locale list.

Example
```javascript
const locales = isoLocale.list; //=> array like [{locale: 'af', name: 'Afrikaans (South Africa)'}, ...];
```
[<p align="right">up to navigation</p>](#navigation)

### <a name="code-list">.codeList</a>
Property - `String[]` - contains full locale codes list.

Example
```javascript
const localeCodes = isoLocale.codeList; //=> array like ['af', 'af-ZA' ...];
```
[<p align="right">up to navigation</p>](#navigation)

### <a name="validate">.validate(code)</a>
Argument - `String` - locale code like `'af'` or `'af-ZA'`.

If code exist return `true`, otherwise `false`.

Example
```javascript
const valid = isoLocale.validate('af'); //=> true
const invalid = isoLocale.validate('arr'); //=> false
```
[<p align="right">up to navigation</p>](#navigation)

### <a name="get">.get(code)</a>
Argument - `String` - locale code like `'af'` or `'af-ZA'`.

If code exist return object with simple locale data like `{locale: 'af', name: 'Afrikaans'}`, otherwise `null`.

Example
```javascript
const data = isoLocale.get('af-ZA'); //=> {locale: 'af', name: 'Afrikaans (South Africa)'}
const noData = isoLocale.get('af-ZARA'); //=> null
```
[<p align="right">up to navigation</p>](#navigation)

## <a name="testing">Test</a>

    npm run test
[<p align="right">up to navigation</p>](#navigation)

## <a name="testing">License</a>
MIT License.
Copyright (c) 2017 Mobitel Ltd
[<p align="right">up to navigation</p>](#navigation)
