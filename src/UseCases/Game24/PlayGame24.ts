import { FourNumberInput, Game24 } from "src/Domains/Game24/Game24";
interface IPlayGame24 {
	execute(input: FourNumberInput): string;
}
export class PlayGame24 implements IPlayGame24 {
	execute(input: FourNumberInput): string {
		const game24 = new Game24();
		const result = game24.play(input);
		if (result) {
			return "YES";
		} else {
			return "NO";
		}
	}
}
