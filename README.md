# Installation
```
npm install @mfonabasiudobia/str-func
```
# Usage
```
import { strtoupper, str_shuffle, strtolower, trim, strlen, ucwords, ucfirst, lcfirst, rand, uniqueID, rtrim, ltrim, explode, implode  } from "@mfonabasiudobia/str-func"
```

### strtoupper
The strtoupper() function converts a string to uppercase
```javascript
const str = strtoupper('hello world!');
// returns 'HELLO WORLD!'
```

### strtolower
The strtolower() function converts a string to lowercase
```javascript
const str = strtolower('HELLO WORLD!');
// returns 'hello world!'
```

### trim
The trim() function removes whitespace or other predefined characters from both sides of a string
```javascript
const str = trim('&nbsp;&nbsp; alpha &nbsp;&nbsp;');
// returns 'alpha'

// OR

const str = trim('&nbsp;&nbsp; alpha &nbsp;&nbsp;', 'a'); //by default third parameter is set to false
// returns 'lph'

// OR 

const str = trim('&nbsp;&nbsp; Alpha &nbsp;&nbsp;', 'a', true); //the third parameter set to true indicates case sensitivity
// returns 'Alpha'

```
