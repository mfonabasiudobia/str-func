# Installation
```
npm install @mfonabasiudobia/str-func
```
# Usage
```
import { strtoupper, str_shuffle, strtolower, trim, strlen, ucwords, ucfirst, lcfirst, rand, rtrim, ltrim, explode, implode  } from "@mfonabasiudobia/str-func"
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
const str = trim('   alpha   ');
// returns 'alpha'

// OR

const str = trim('   alpha   ', 'a'); //the second parameter is optional, it specifies which character to remove from the string
// returns 'lph'

// OR 

const str = trim('   Alpha   ', 'a', true); //the third parameter set to true indicates case sensitivity
// returns 'Alph'

```

### rtrim
The rtrim() function removes whitespace or other predefined characters from right sides of a string
```javascript
const str = rtrim('   alpha   ');
// returns '   alpha'

// OR

const str = rtrim('   alpha   ', 'a'); //the second parameter is optional, it specifies which character to remove from the string
// returns '   alph'

// OR 

const str = rtrim('   Alpha   ', 'A', true); //the third parameter set to true indicates case sensitivity
// returns '   Alpha'

//by default third parameter is set to false

```

### ltrim
The ltrim() function removes whitespace or other predefined characters from left sides of a string
```javascript
const str = ltrim('   alpha   ');
// returns 'alpha   '

// OR

const str = ltrim('   alpha   ', 'a'); //the second parameter is optional, it specifies which character to remove from the string
// returns 'lpha   '

// OR 

const str = ltrim('   Alpha   ', 'a', true); //the third parameter set to true indicates case sensitivity
// returns 'Alpha   '

//by default third parameter is set to false

```

### strlen
The strlen() function returns the length of a string
```javascript
const str = strlen('HELLO WORLD!');
// returns 12
```

### rand
The rand() function generates a random integer
```javascript
const str = rand();
// returns 127929382383
```
##### Example tip
If you want a random integer between 10 and 100 (inclusive), use rand(10, 100)
```javascript
rand();

//or

rand(min, max);
```