import Container from "typedi";
import { PlayGame24, PlayGame24Token } from "@usecases/Game24/PlayGame24";
import { PlayXO, PlayXOToken } from "@usecases/XO/PlayXO";

export function containerSetup(): void {
	Container.set({ id: PlayGame24Token, type: PlayGame24 });
	Container.set({ id: PlayXOToken, type: PlayXO });
}
