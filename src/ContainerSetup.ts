import Container from "typedi";
import { PlayGame24, PlayGame24Token } from "@usecases/Game24/PlayGame24";

export function containerSetup(): void {
	Container.set(PlayGame24Token, new PlayGame24());
}
