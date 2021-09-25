import Container from "typedi";
import { PlayGame24, PlayGame24Token } from "@usecases/Game24/PlayGame24";
import { PlayXO, PlayXOToken } from "@usecases/XO/PlayXO";
import { PlaceAPIToken } from "@usecases/Place/type";
import { PlaceAPI } from "@infrastructure/PlaceAPI";
import { FindPlace, FindPlaceToken } from "@usecases/Place/FindPlace";

export function containerSetup(): void {
	Container.set({ id: PlayGame24Token, type: PlayGame24 });
	Container.set({ id: PlayXOToken, type: PlayXO });
	Container.set({ id: PlaceAPIToken, type: PlaceAPI });
	Container.set({ id: FindPlaceToken, type: FindPlace });
}
