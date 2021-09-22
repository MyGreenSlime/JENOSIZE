import { FourNumberInput, Game24 } from "@domains/Game24/Game24";
import { Service, Token } from "typedi";
export interface IPlayGame24 {
	execute(input: FourNumberInput): string;
}
export const PlayGame24Token = Symbol("PlayGame24Token").toString();
@Service()
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
