import {
	Middleware,
	ExpressErrorMiddlewareInterface,
	Req,
} from "routing-controllers";
import { Service } from "typedi";
import express from "express";
@Middleware({ type: "after" })
@Service()
export class CustomErrorHandler implements ExpressErrorMiddlewareInterface {
	error(
		error: any,
		request: express.Request,
		response: express.Response,
		next: (err?: any) => any
	) {
		if (error.httpCode === 400) {
			response
				.status(error.httpCode)
				.send({ message: error.message, details: error.errors });
		} else {
			response.status(error.httpCode).send({ message: error.message });
		}

		next();
	}
}
