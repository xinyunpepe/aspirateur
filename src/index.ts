import { Aspirateur } from "./aspirateur";

const ps = require('prompt-sync');
const input = ps();

// grid
const demensionX = input('Grid demension X: ');
const demensionY = input('Grid demension Y: ');

// aspirateur
const initX = input('Initial position X: ');
const initY = input('Initial position Y: ');
const initDirection = input('Initial direction: ').toUpperCase();

// instructions
const instructions = input('Instructions: ').toUpperCase();

// input error checks
function isNumeric(str: string) {
	return /^[0-9]+$/.test(str);
}

function isValidDir(str: string) {
	const dir = ['N', 'E', 'W', 'S'];
	return dir.includes(str);
}

function isValidIns(str: string) {
	const ins = ['D', 'G', 'A'];
	return str.split('').every(e => ins.indexOf(e) > -1);
}

if (!isNumeric(demensionX) || !isNumeric(demensionY) || !isNumeric(initX) || !isNumeric(initY)) {
	console.log('Invalid input for demention / initial position');
}
else if (parseInt(initX) > parseInt(demensionX) || parseInt(initY) > parseInt(demensionY)) {
	console.log('Initial position is out of the grid');
}
else if (!isValidDir(initDirection)) {
	console.log('Invalid input for initial direction');
}
else if (!isValidIns(instructions)) {
	console.log('Invalid input for instruction');
}
// result
else {
	const a = new Aspirateur();

	a.place({ x: parseInt(initX), y: parseInt(initY), direction: initDirection });
	a.evaluate(instructions);

	a.coordinates[0] < 0 ? a.coordinates[0] = 0 : a.coordinates[0];
	a.coordinates[1] < 0 ? a.coordinates[1] = 0 : a.coordinates[1];
	a.coordinates[0] > parseInt(demensionX) ? a.coordinates[0] = parseInt(demensionX) : a.coordinates[0];
	a.coordinates[1] > parseInt(demensionY) ? a.coordinates[1] = parseInt(demensionY) : a.coordinates[1];

	console.log('Final direction: ', a.direction);
	console.log('Final coordinates: ', a.coordinates);
}
