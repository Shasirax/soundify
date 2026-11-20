

const divide = (a, b) => {
	if(typeof a !== 'number' || typeof b !== 'number' || Number.isNaN(a) || Number.isNaN(b)) {
		throw new Error(`Please enter a number`);
	}
	
}