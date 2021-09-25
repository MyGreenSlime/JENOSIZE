import { config } from "@root/config";
import { IPlaceAPI } from "@usecases/Place/type";
import axios from "axios";
import { Service } from "typedi";
@Service()
export class PlaceAPI implements IPlaceAPI {
	async find(placeName: string): Promise<Record<string, any>> {
		const response = await axios.get(config.GooglePlaceAPI.url, {
			params: {
				fields: "formatted_address,name,rating,opening_hours,geometry",
				query: placeName,
				key: config.GooglePlaceAPI.token,
			},
		});
		return response.data.results;
	}
}
