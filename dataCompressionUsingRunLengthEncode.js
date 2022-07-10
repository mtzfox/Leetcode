// Related to *Length of string compression* entry, this not only encodes but also decodes. Doing so required changing my code to use regex instead of a map.

// In a string, return the list of repeating characters: `aaabbbcc` would return `3a3b2c`

function encode(input) {
	let compact = [];
	let patterns = input.match(/(\w)\1*/g);

	for (let i = 0; i < patterns.length; i++) {
		let length = patterns[i].length;
		let letter = patterns[i][0];
		compact.push(length, letter);
	}
	return compact.join('');
}

function decode(input) {
	let output = [];
	let digits = input.match(/\d+/g);
	let letters = input.match(/\D+/g);

	for (let i = 0; i < input.length; i++) {
		let repeat = ~~digits[i], letter = letters[i];
		while (repeat > 0) {
			output.push(letter);
			repeat--;
		}
	}
	return output.join('');
}