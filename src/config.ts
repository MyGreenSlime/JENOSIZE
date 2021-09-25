export const config = {
	GooglePlaceAPI: {
		url:
			process.env.GOOGLE_PLACE_API_URL ||
			"https://maps.googleapis.com/maps/api/place/textsearch/json",
		token: process.env.GOOGLE_PLACE_API_TOKEN || "",
	},
};
