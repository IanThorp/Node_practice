let args = process.argv.slice(2);

const numSum = (numArr) => {
	let total = numArr.reduce((a, b) => parseInt(a) + parseInt(b), 0);
	return total;
}

console.log(numSum(args));