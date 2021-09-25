import {
	Body,
	Controller,
	InternalServerError,
	Post,
	Req,
	Res,
} from "routing-controllers";
import { FourNumberInput } from "@domains/Game24/Game24";
import { IPlayGame24, PlayGame24Token } from "@usecases/Game24/PlayGame24";
import express from "express";
import { Inject, Service } from "typedi";
import { PresentationPlayGame24Input } from "./Inputs";
@Controller("/api/game24")
@Service()
export default class Game24Controller {
	constructor(
		@Inject(PlayGame24Token) private readonly playGame24: IPlayGame24
	) {}
	@Post("/play")
	async play(
		@Req() req: express.Request,
		@Res() res: express.Response,
		@Body({ validate: true }) body: PresentationPlayGame24Input
	) {
		try {
			const result = this.playGame24.execute(body.input);
			res.status(200).send(result);
			return res;
		} catch (err) {
			throw new InternalServerError((err as Error).message);
		}
	}
}
