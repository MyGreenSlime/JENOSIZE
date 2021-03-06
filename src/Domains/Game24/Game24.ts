export type FourNumberInput = [number, number, number, number];
export interface IGame24 {
	play(input: FourNumberInput): boolean;
}
export class Game24 implements IGame24 {
	play(input: FourNumberInput): boolean {
		return this.internalPlay(input);
	}

	private internalPlay(input: number[]): boolean {
		if (input.length === 1) {
			if (input[0] === 24) {
				return true;
			}
			return false;
		} else {
			for (let i = 0; i < input.length; i++) {
				for (let j = i + 1; j < input.length; j++) {
					const eachResults: (number | null)[] = [
						this.sum(input[i], input[j]),
						this.subtract(input[i], input[j]),
						this.subtract(input[j], input[i]),
						this.multiply(input[i], input[j]),
						this.divide(input[i], input[j]),
						this.divide(input[j], input[i]),
					];
					for (let k = 0; k < eachResults.length; k++) {
						if (eachResults[k] === null) {
							continue;
						}
						const temp1 = this.internalPlay(
							this.createNewArray(input, [i, j], eachResults[k] as number)
						);
						if (temp1) {
							return temp1;
						}
					}
				}
			}
			return false;
		}
	}

	private createNewArray(
		oldInput: number[],
		removeIdxs: number[],
		newInput: number
	): number[] {
		const newArray: number[] = [];
		for (let i = 0; i < oldInput.length; i++) {
			if (!removeIdxs.includes(i)) newArray.push(oldInput[i]);
		}
		newArray.push(newInput);
		return newArray;
	}
	private sum(a: number, b: number): number {
		return a + b;
	}
	private subtract(a: number, b: number): number {
		return a - b;
	}
	private multiply(a: number, b: number): number {
		return a * b;
	}
	private divide(a: number, b: number): number | null {
		try {
			if (a % b === 0) {
				return a / b;
			}
			return null;
		} catch (err) {
			return null;
		}
	}
}
