const BALLCOUNT = 6;
const DRAWCOUNT = 3;
function start() {
	let balls = [];
	for (let i = 1; i <= BALLCOUNT; i++) {
		let item = i;
		balls.push(item);
	}

	function sort(input) {
		for (let i = 0; i < input.length; i++) {
			let min = i;
			for (let j = i + 1; j < input.length; j++) {
				if (input[j] < input[min]) {
					min = j;
				}
			}
			let temp = input[i];
			input[i] = input[min];
			input[min] = temp;
		}
		return input;
	}

	let list = [];
	for (let i = 0; i < balls.length; i++) {
		for (let j = 0; j < balls.length; j++) {
			for (let k = 0; k < balls.length; k++) {
				let item = [];
				item.push(balls[i]);
				item.push(balls[j]);
				item.push(balls[k]);
				list.push(item);
			}
		}
	}

	let sortedList = [];
	for (let i = 0; i < list.length; i++) {
		sortedList.push(sort(list[i]));
	}

	let noDupeList = [];
	for (let i = 0; i < sortedList.length; i++) {
		let included = false;
		for (let j = 0; j < noDupeList.length; j++) {
			let thisOne = false;
			for (let k = 0; k < noDupeList[j].length; k++) {
				if (noDupeList[j][k] != sortedList[i][k]) {
					thisOne = true;
				}
			}
			if (thisOne == false) {
				included = true;
			}
		}
		if (!included) {
			noDupeList.push(sortedList[i]);
		}
	}

	console.log(noDupeList);
}

start();