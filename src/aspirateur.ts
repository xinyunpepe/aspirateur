type Direction = 'N' | 'E' | 'W' | 'S';
type Coordinates = [number, number];

export class Aspirateur {
	direction: Direction;
	coordinates: Coordinates;

	constructor() {
		this.direction = 'N';
		this.coordinates = [0, 0];
	}

	place(ins: { x: number; y: number; direction: string }) {
		this.coordinates = [ins.x, ins.y];

		switch(ins.direction) {
			case 'N':
				this.direction = 'N';
				break
			case 'E':
				this.direction = 'E';
				break
			case 'W':
				this.direction = 'W';
				break
			case 'S':
				this.direction = 'S';
				break
			default:
				break
		}
	}

	turnRight() {
		switch(this.direction) {
			case 'N':
				this.direction = 'E';
				break
			case 'E':
				this.direction = 'S';
				break
			case 'S':
				this.direction = 'W';
				break
			case 'W':
				this.direction = 'N';
				break
			default:
				break
		}
	}

	turnLeft() {
		switch(this.direction) {
			case 'N':
				this.direction = 'W';
				break
			case 'W':
				this.direction = 'S';
				break
			case 'S':
				this.direction = 'E';
				break
			case 'E':
				this.direction = 'N';
				break
			default:
				break
		}
	}

	avance() {
		switch(this.direction) {
			case 'N':
				this.coordinates[1]++;
				break
			case 'E':
				this.coordinates[0]++;
				break
			case 'W':
				this.coordinates[0]--;
				break
			case 'S':
				this.coordinates[1]--;
				break
			default:
				break
		}
	}

	evaluate(ins: string) {
		ins.split('').forEach(i => {
			switch(i) {
				case 'D':
					this.turnRight();
					break
				case 'G':
					this.turnLeft();
					break
				case 'A':
					this.avance();
					break
				default:
					break
			}
		})
	}
}
