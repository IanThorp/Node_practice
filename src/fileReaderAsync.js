const fs = require('fs'); 
let fileName = process.argv[2]

const numLinesFile = (filePath, cb) => {
	let file = fs.readFile(filePath);
	let numLines = file.split('/n').length - 1
	cb();
}

numLinesFile(fileName, function(){
	console.log(numLines);
})