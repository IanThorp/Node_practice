'use strict';

var fs = require('fs');
var fileName = process.argv[2];

var numLinesFile = function numLinesFile(filePath, cb) {
	var file = fs.readFile(filePath);
	var numLines = file.split('/n').length - 1;
	cb();
};

numLinesFile(fileName, function (err, numLines) {
	console.log(numLines);
});