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

const rand = (min, max) => {

	try {
		if(checkTypes(min + max, ['number'])) 
			return Math.floor(Math.random() * (max - min + 1) + min);

		throw (msg.isNumber);

	} catch (e) {
		console.log(e);
	}

}

const uniqueID = (limit = 0) => {

	try {
		if(checkTypes(limit, ['number'])) {
			let randStr = (Math.floor(Math.random() * Math.floor(Math.random() * Date.now()))).toString();

			return limit <= 0 ? randStr : randStr.substring(0, limit);
		}

		throw ("Limit can only be of type number");

	} catch (e) {
		console.log(e);
	}

	
}



const strtolower = (str) => {

	try {
		if(checkTypes(str, ['string'])) 
			return deepTrim(str.toLowerCase());

		throw (msg.isString);

	} catch (e) {
		console.log(e);
	}
	
}


const trim = (str) => {

	try {
		if(checkTypes(str, ['string'])) 
			return str.trim();

		throw (msg.isString);

	} catch (e) {
		console.log(e);
	}
	
}

const rtrim = (str) => {

	try {
		if(checkTypes(str, ['string'])) 
			return str.trimRight();

		throw (msg.isString);

	} catch (e) {
		console.log(e);
	}
	
}

const ltrim = (str) => {

	try {
		if(checkTypes(str, ['string'])) 
			return str.trimStart();

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

const ucwords = (str, separator = '') => { //separator specifies the word separator character

	try {
		if(checkTypes(str, ['string'])){
				
			const regex = new RegExp(`${separator}\\b[a-z]`,"g");
			
			return deepTrim(str).replace(regex, (res) => strtoupper(res)); 

		}

		throw (msg.isString);

	} catch (e) {
		console.log(e);
	}
	
}

const ucfirst = (str) => { 

	try {
		if(checkTypes(str, ['string'])) 
			return deepTrim(str).replace(/\b[a-z]/, (res) => strtoupper(res)); 

		throw (msg.isString);

	} catch (e) {
		console.log(e);
	}
	
}

const lcfirst = (str) => { 

	try {
		if(checkTypes(str, ['string']))  
			return deepTrim(str).replace(/\b[A-Z]/, (res) => strtolower(res)); 

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



module.exports = { strtoupper, str_shuffle, strtolower, trim, strlen, ucwords, ucfirst, lcfirst, rand, uniqueID, rtrim, ltrim, explode, implode };