import { FourNumberInput } from "@domains/Game24/Game24";
import { ArrayMaxSize, ArrayMinSize, IsArray, IsInt } from "class-validator";

export class PresentationPlayGame24Input {
	@IsArray()
	@IsInt({ each: true })
	@ArrayMaxSize(4)
	@ArrayMinSize(4)
	input: FourNumberInput;
}
