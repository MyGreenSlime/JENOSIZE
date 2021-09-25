export interface IPlaceAPI {
	find(placeName: string): Promise<Record<string, any>>;
}
export const PlaceAPIToken = Symbol("PlaceAPIToken").toString();
