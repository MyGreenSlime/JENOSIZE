import Container from "typedi";
import { PlayGame24, PlayGame24Token } from "@usecases/Game24/PlayGame24";

export function containerSetup(): void {
	Container.set({ id: PlayGame24Token, type: PlayGame24 });
}
