

const expandAroundCenter = function(s, left, right) {
	let l = left,
		r = right,
		len = s.length;

	while (l >= 0 && r < len && s[l] === s[r]) {
		l--;
		r++;
	}
	return r - l - 1;
};

const longestPalindrome = function(s) {
	let start = 0,
		end = 0,
		len = s.length,
		num = 0;

	for (var i = 0; i < len; i++) {
		num = Math.max(expandAroundCenter(s, i, i), expandAroundCenter(s, i, i + 1));

		if (num > end - start) {
			start = i - Math.floor((num - 1) / 2);
			end = i + Math.floor(num / 2);
		}
	}

	return s.slice(start, end + 1);
};