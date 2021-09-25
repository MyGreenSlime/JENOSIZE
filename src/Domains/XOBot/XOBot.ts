export type XOTable = Array<[string, string, string]>;
export type XORow = [
	string,
	string,
	string,
	string,
	string,
	string,
	string,
	string,
	string
];
export interface BoardState {
	currenTable: XOTable;
	player: string;
	bot: string;
	isFinished: boolean;
	winner: string;
}
export interface IXOBot {
	play(table: XOTable, player: string): BoardState;
}
export class XOBot implements IXOBot {
	private bot: string;
	private finishPatterns: Array<[number, number, number]> = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	play(table: XOTable, player: string = "X"): BoardState {
		this.setupBot(player);
		const xoRow = this.transformTableToRow(table);
		const result = this.getBoardResult(xoRow);
		if (result.isFinished) {
			return {
				currenTable: table,
				player: player,
				bot: this.bot,
				isFinished: result.isFinished,
				winner: result.winner,
			};
		}
		const currentTable = this.think(table);
		const currentXoRow = this.transformTableToRow(currentTable);
		const newResult = this.getBoardResult(currentXoRow);
		return {
			currenTable: currentTable,
			player: player,
			bot: this.bot,
			isFinished: newResult.isFinished,
			winner: newResult.winner,
		};
	}
	private think(table: XOTable): XOTable {
		const xoRow = this.transformTableToRow(table);
		const walks = [];
		for (const [idx, unit] of xoRow.entries()) {
			if (unit === "-") {
				walks.push(idx);
			}
		}
		const selectedWalk = this.selectWalk(walks, xoRow);
		xoRow[selectedWalk] = this.bot;
		return this.transfromToTable(xoRow);
	}
	private selectWalk(walks: number[], xoRow: XORow): number {
		for (const walk of walks) {
			const deepClonedTransfomedTable: XORow = [...xoRow];
			deepClonedTransfomedTable[walk] = this.bot;
			const { isFinished, winner } = this.getBoardResult(
				deepClonedTransfomedTable
			);
			if (isFinished && winner === this.bot) {
				return walk;
			}
		}
		return walks[0];
	}
	private getBoardResult(xoRow: XORow): {
		isFinished: boolean;
		winner: string;
	} {
		let isFinished: boolean = false;
		let winner: string = "-";
		for (const pattern of this.finishPatterns) {
			if (
				xoRow[pattern[0]] === "-" ||
				xoRow[pattern[1]] === "-" ||
				xoRow[pattern[2]] === "-"
			) {
				continue;
			}

			isFinished =
				xoRow[pattern[0]] === xoRow[pattern[1]] &&
				xoRow[pattern[1]] === xoRow[pattern[2]];
			if (isFinished) {
				winner = xoRow[pattern[0]];
				break;
			}
		}
		return { isFinished, winner };
	}
	private transformTableToRow(table: XOTable): XORow {
		let xoRow = [];
		for (const row of table) {
			xoRow.push(...row);
		}
		return xoRow as XORow;
	}
	private transfromToTable(xoRow: XORow): XOTable {
		const table = [];
		for (let i = 0; i < 3; i++) {
			const tempRow = [];
			for (let j = 0; j < 3; j++) {
				tempRow.push(xoRow[i * 3 + j]);
			}
			table.push(tempRow);
		}
		return table as XOTable;
	}
	private setupBot(player: string) {
		if (player === "O") {
			this.bot = "X";
		} else if (player === "X") {
			this.bot = "O";
		}
	}
}
