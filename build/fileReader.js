'use strict';

var fs = require('fs');

var numLinesInFile = function numLinesInFile(filePath) {
	var fileContents = fs.readFileSync(filePath).toString();
	var numLines = fileContents.split('/n').length - 1;
	return numLines;
};

console.log(numLinesInFile(process.argv[2]));