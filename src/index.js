const checkTypes =  require("./helpers/checkTypes.js");


const msg = {
	isString : 'Variable type must be a string',
	isNumber : 'Variable type must be an integer',
	isArray : 'Variable type must be an array or object',
	isStringOrNumber : `Variable type must be a string or number`
}

const deepTrim = (str) =>  str.replace(/\s{2,}/g,' ').trim(); //remove All white spaces

const strtoupper = (str) => {

	try {
		if(checkTypes(str, ['string'])) 
			return deepTrim(str.toUpperCase());

		throw (msg.isString);

	} catch (e) {
		console.log(e);
	}

}

const rand = (min = 0, max = 0) => {

	try {
		if(checkTypes(min + max, ['number'])) 
			return !(min + max) ? uniqueID() : Math.floor(Math.random() * (max - min + 1) + min);

		throw (msg.isNumber);

	} catch (e) {
		console.log(e);
	}

}

const uniqueID = () => (Math.floor(Math.random() * Math.floor(Math.random() * Date.now()))).toString();



const strtolower = (str) => {

	try {
		if(checkTypes(str, ['string'])) 
			return deepTrim(str.toLowerCase());

		throw (msg.isString);

	} catch (e) {
		console.log(e);
	}
	
}


const trim = (str, charlist = null, isSensitive = true) => {

	try {
		const startRegex = new RegExp(`^${charlist}*`,!isSensitive ? 'i' : '');
		const endRegex = new RegExp(`${charlist}*$`,!isSensitive ? 'i' : '');

		if(checkTypes(str, ['string'])) 
			return charlist === null ? str.trim() : str.trim().replace(startRegex,"").replace(endRegex,"") ;

		throw (msg.isString);

	} catch (e) {
		console.log(e);
	}
	
}

const rtrim = (str, charlist = null, isSensitive = true) => {

	try {

		const endRegex = new RegExp(`${charlist}*$`,!isSensitive ? 'i' : '');

		if(checkTypes(str, ['string'])) 
			return charlist === null ? str.trimRight() : str.trimRight().replace(endRegex,"") ;

		throw (msg.isString);

	} catch (e) {
		console.log(e);
	}
	
}

const ltrim = (str, charlist = null, isSensitive = true) => {

	try {
		const startRegex = new RegExp(`^${charlist}*`,!isSensitive ? 'i' : '');

		if(checkTypes(str, ['string'])) 
			return charlist === null ? str.trimStart() : str.trimStart().replace(startRegex,"") ;

		throw (msg.isString);

	} catch (e) {
		console.log(e);
	}
	
}

const strlen = (str) => {

	try {
		if(checkTypes(str, ['string'])) 
			return deepTrim(str).length;

		throw (msg.isString);

	} catch (e) {
		console.log(e);
	}
	
}

const ucwords = (str, separator = ' ') => { //separator specifies the word separator character

	try {
		if(checkTypes(str, ['string'])){

			let arrayString = explode(str, separator);

			arrayString.map((item, index) => arrayString[index] = ucfirst(item) );

			return implode(arrayString, separator);

		}

		throw (msg.isString);

	} catch (e) {
		console.log(e);
	}
	
}

const ucfirst = (str) => { 

	try {
		if(checkTypes(str, ['string'])) 
			return strtoupper(deepTrim(str).charAt(0)) + str.slice(1); 

		throw (msg.isString);

	} catch (e) {
		console.log(e);
	}
	
}

const lcfirst = (str) => { 

	try {
		if(checkTypes(str, ['string']))  
			return strtolower(deepTrim(str).charAt(0)) + deepTrim(str).slice(1); 

		throw (msg.isString);

	} catch (e) {
		console.log(e);
	}
	
}

const explode = (str, separator = null) => { 

	try {
		if(checkTypes(str, ['string','number']))  
				return separator == null ? [str] : deepTrim(str).split(separator); 

		throw (msg.isString);

	} catch (e) {
		console.log(e);
	}
	
}

const implode = (str, separator = null) => { 

	try {
		if(checkTypes(str, ['object']))  
				return separator == null ? str.toString() : str.join(separator); 

		throw (msg.isArray);

	} catch (e) {
		console.log(e);
	}
	
}

const str_shuffle = (str) => { 

	try {
		if(checkTypes(str, ['number',"string"]))  
				return str.toString().split('').sort(() => 0.5-Math.random()).join(''); 

		throw (msg.isStringOrNumber);

	} catch (e) {
		console.log(e);
	}
	
}



module.exports = { strtoupper, str_shuffle, strtolower, trim, strlen, ucwords, ucfirst, lcfirst, rand, rtrim, ltrim, explode, implode };