function pick() {
	let people = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1];
	let out = [];
	for (let i = 0; i < 4; i++) {
		let r = Math.floor(people.length*Math.random());
		out.push(people[r]);
		people.splice(r, 1);
	}
	let sum = 0;
	for (let i = 0; i < out.length; i++) {
		sum += out[i];
	}
	return sum;
}
let avg = 0;
const SIZE = 10000;
for (let i = 0; i < SIZE; i++) {
	avg += pick()/SIZE;
}
console.log(avg);