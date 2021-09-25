import { XOTable, XOBot, BoardState } from "@domains/XOBot/XOBot";
import { Service } from "typedi";
export interface IPlayXO {
	execute(input: XOTable): BoardState;
}
export const PlayXOToken = Symbol("PlayXOToken").toString();
@Service()
export class PlayXO implements IPlayXO {
	execute(input: XOTable): BoardState {
		const xoBot = new XOBot();
		const result = xoBot.play(input);
		return result;
	}
}
