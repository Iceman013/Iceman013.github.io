const HOURS = 72;
const CONVE = 60*60;
var count = 0;
var chance = 0.005;
for (let i = 0; i < HOURS*CONVE; i++) {
	for (let j = 0; j < 3; j++) {
		if (Math.random() < chance) {
			chance = 0.5*chance;
			count++;
		}
	}
}
console.log(count);