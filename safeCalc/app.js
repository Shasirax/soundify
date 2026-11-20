const divide = (a, b) => {
	if (typeof a !== 'number' || typeof b !== 'number' || Number.isNaN(a) || Number.isNaN(b)) throw new Error(`Please enter a number`);
	if (b === 0) throw new Error(`Don't break the laws of math/physics`);
	
	return a / b;
}

try {
	console.log(divide(3,5));
} catch (error) {
	console.log(error.message);
} finally {
	console.log("Calculation attempt completed.");
}