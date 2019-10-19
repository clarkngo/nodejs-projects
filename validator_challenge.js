const checker = function(input) {
	const reverse = function(str) {
		return str.split('').reverse().join('');
	};

	const validator = {
		str1 : 'iscor',
		str2 : reverse('tcer'),
		str3 : 'isth',
		validate(attempt) {
			return attempt === (validator.str3 + validator.str1 + validator.str2);
		},
	};

	return validator.validate(input);
};
// What input string will successfully validate against the function?
// answer: isthiscorrect
