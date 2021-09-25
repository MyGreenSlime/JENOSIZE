import { FindPlaceToken, IFindPlace } from "@usecases/Place/FindPlace";
import express from "express";
import {
	Controller,
	Get,
	InternalServerError,
	QueryParam,
	Req,
	Res,
} from "routing-controllers";
import { Inject, Service } from "typedi";

@Controller("/api/place")
@Service()
export default class PlaceController {
	constructor(@Inject(FindPlaceToken) private readonly findPlace: IFindPlace) {}
	@Get("/find")
	async find(
		@Req() req: express.Request,
		@Res() res: express.Response,
		@QueryParam("input", { required: true, validate: true }) input: string
	) {
		try {
			const result = await this.findPlace.execute(input);
			res.status(200).send(result);
			return res;
		} catch (err) {
			throw new InternalServerError((err as Error).message);
		}
	}
}
