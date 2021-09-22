import { useContainer, useExpressServer } from "routing-controllers";
import express from "express";
import { RESTControllers } from "./RESTControllers";
import Container from "typedi";

function setExpressApplicationWithControllers(
	controllers: Array<{ new (...args: any[]): any }> | string[]
): express.Express {
	const app = express();
	app.use(express.json());
	app.use(express.urlencoded({ extended: true }));
	useExpressServer(app, {
		controllers: controllers,
	});
	return app;
}
export function setupExpressApplication(): express.Express {
	return setExpressApplicationWithControllers(RESTControllers);
}
export async function setupServer() {
	useContainer(Container);
	const app = setupExpressApplication();
	app.listen(
		{
			port: 3000,
		},
		() => {
			console.log("Server is started");
		}
	);
}
