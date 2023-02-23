function modMethod(number, divisor) {
	return number % divisor;
}
function remainderMethod(number, divisor) {
	var whole = Math.floor(number/divisor);
	return number - whole;
}
function classic(number, divisor) {
	var current = number;
	while (current >= divisor) {
		current -= divisor;
	}
	return current;
}
function myWay(number, divisor) {
	var base = 2;
	var powa = 1;
	var tc = divisor;
	while (tc >= base) {
		tc = tc/base;
		powa = powa*base;
	}
	var sidea = Math.floor(divisor/powa);
	var sideb = divisor % powa;
	var current = number;
	while (current >= divisor) {
		var front = Math.floor(current/powa);
		var end = current % powa;
		current = sideb*front - sidea*end;
	}
	return current;
}
function getInts(range, length) {
	var out = [];
	for (let i = 0; i < length; i++) {
		var rand = Math.floor(range*Math.random() + 2);
		out.push(rand);
	}
	return out;
}
function tryout() {
	var length = Math.pow(10, 6);
	var nums = getInts(Math.pow(10, 20), length);
	var divs = getInts(Math.pow(10, 2), length);
	console.log("Generated");

	console.time("Mod Method");
	for (let i = 0; i < length; i++) {
		modMethod(nums[i], divs[i]);
	}
	console.timeEnd("Mod Method");

	console.time("Remainder Method");
	for (let i = 0; i < length; i++) {
		remainderMethod(nums[i], divs[i]);
	}
	console.timeEnd("Remainder Method");

	/*
	console.time("Classic Method");
	for (let i = 0; i < length; i++) {
		classic(nums[i], divs[i]);
	}
	console.timeEnd("Classic Method");
	*/

	console.time("My Method");
	for (let i = 0; i < length; i++) {
		myWay(nums[i], divs[i]);
	}
	console.timeEnd("My Method");
}
tryout();