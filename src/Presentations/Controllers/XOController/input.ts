import { FourNumberInput } from "@domains/Game24/Game24";
import { XOTable } from "@domains/XOBot/XOBot";
import { ArrayMaxSize, ArrayMinSize, IsArray, IsInt } from "class-validator";

export class PresentationPlayXOInput {
	@IsArray()
	@ArrayMaxSize(3)
	@ArrayMinSize(3)
	input: XOTable;
}
