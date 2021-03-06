## @mfonabasiudobia/str-func
> Better javascript string functions similar to php

## Installation
```
npm install @mfonabasiudobia/str-func
```
## Usage
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

const str = trim('   Alpha   ', 'a', false); //the third parameter set to false indicates case insensitivity
// returns 'lph'

// OR 

const str = trim('   Alpha   ', 'a', true); or trim('   Alpha   ', 'a'); 
// returns 'Alph'

//by default third parameter is set to true
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

const str = rtrim('   Alpha   ', 'A', false); //the third parameter set to false indicates case insensitivity
// returns '   Alph'

// OR 

const str = rtrim('   Alpha   ', 'a', true); or rtrim('   Alpha   ', 'a'); 
// returns '   Alpha'


//by default third parameter is set to true

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

const str = ltrim('   Alpha   ', 'a', false); //the third parameter set to false indicates case insensitivity
// returns 'lpha   '

// OR 

const str = ltrim('   Alpha   ', 'a', true); or ltrim('   Alpha   ', 'a'); 
// returns 'Alpha   '

//by default third parameter is set to true

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
###### Example tip
If you want a random integer between 10 and 100 (inclusive), use rand(10, 100)
```javascript
rand();

//or

rand(min, max);
```

### str_shuffle
The str_shuffle() function randomly shuffles all the characters of a string 
```javascript
const str = str_shuffle('hello world!');
// returns oldlre loWH
```

### ucwords
The ucwords() function converts the first character of each word in a string to uppercase 
```javascript
const str = ucwords('hello world!');
// returns Hello World!

//or

const str = ucwords('he|llo world!',"|"); //the second parameter is optional, it specifies the word separator character
//returns He|Llo world!

```

### ucfirst
The ucfirst() function converts the first character of a string to uppercase 
```javascript
const str = ucfirst('hello world!');
// returns Hello world!
```

### lcfirst
The lcfirst() function converts the first character of a string to lowercase 
```javascript
const str = lcfirst('Hello world!');
// returns hello world!
```

### explode
The explode() function breaks a string into an array 
```javascript
const str = explode('hello,world',",");
// returns ['hello','world']
```

### implode
The implode() function returns a string from the elements of an array 
```javascript
const str = implode(['hello','world'],"#");
// returns hello#world
```