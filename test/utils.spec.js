let chai     = require('chai');
let {assert} = chai;

let utils = require('../utils');

describe('lowerCaseFirstLetter', () =>{
	it('first letter should be in lower case', () => {
		let str = 'FirstStringLetter';
		assert.equal(utils.lowerCaseFirstLetter(str), 'firstStringLetter');
	});
});

describe('upperCaseFirstLetter', () =>{
	it('first letter should be in upper case', () => {
		let str = 'firstStringLetter';
		assert.equal(utils.upperCaseFirstLetter(str), 'FirstStringLetter');
	});
});

describe('hiphenizeStr', () =>{
	it('camel case string should be converted for hiphenize string', () => {
		let str = 'firstStringLetter';

		assert.equal(utils.hiphenizeStr(str), 'first-string-letter');
	});

	it('camel case string(first letter upper case) should be converted for hiphenize string', () => {
		let str = 'FirstStringLetter';

		assert.equal(utils.hiphenizeStr(str), 'first-string-letter');
	});
});