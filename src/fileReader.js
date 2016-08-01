var fs = require('fs');

const numLinesInFile = (filePath) => {
	let fileContents = fs.readFileSync(filePath).toString();
	let numLines = fileContents.split('/n').length - 1;
	return numLines;
}

console.log(numLinesInFile(process.argv[2])