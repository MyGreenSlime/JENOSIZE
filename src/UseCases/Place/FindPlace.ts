import { Inject, Service } from "typedi";
import { IPlaceAPI, PlaceAPIToken } from "./type";

export interface IFindPlace {
	execute(input: string): Promise<Record<string, any>>;
}
export const FindPlaceToken = Symbol("FindPlaceToken").toString();
@Service()
export class FindPlace implements IFindPlace {
	constructor(@Inject(PlaceAPIToken) private readonly placeAPI: IPlaceAPI) {}
	async execute(input: string): Promise<Record<string, any>> {
		const places = await this.placeAPI.find(input);
		return places;
	}
}
