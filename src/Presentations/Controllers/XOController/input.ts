import { XOTable } from "@domains/XOBot/XOBot";
import { ArrayMaxSize, ArrayMinSize, IsArray } from "class-validator";

export class PresentationPlayXOInput {
	@IsArray()
	@ArrayMaxSize(3)
	@ArrayMinSize(3)
	input: XOTable;
}
