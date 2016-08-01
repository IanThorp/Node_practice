"use strict";

var args = process.argv.slice(2);

var numSum = function numSum(numArr) {
	var total = numArr.reduce(function (a, b) {
		return parseInt(a) + parseInt(b);
	}, 0);
	return total;
};

console.log(numSum(args));