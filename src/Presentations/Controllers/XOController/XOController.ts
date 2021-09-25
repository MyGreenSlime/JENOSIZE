import { IPlayXO, PlayXOToken } from "@usecases/XO/PlayXO";
import express from "express";
import {
	Body,
	Controller,
	InternalServerError,
	Post,
	Req,
	Res,
} from "routing-controllers";
import { Inject, Service } from "typedi";
import { PresentationPlayXOInput } from "./input";

@Controller("/api/xobot")
@Service()
export default class XOBotController {
	constructor(@Inject(PlayXOToken) private readonly playxo: IPlayXO) {}
	@Post("/play")
	async play(
		@Req() req: express.Request,
		@Res() res: express.Response,
		@Body({ validate: true }) body: PresentationPlayXOInput
	) {
		try {
			const result = this.playxo.execute(body.input);
			res.status(200).send(result);
			return res;
		} catch (err) {
			throw new InternalServerError((err as Error).message);
		}
	}
}
