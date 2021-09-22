import { useContainer, useExpressServer } from "routing-controllers";
import express from "express";
import { RESTControllers } from "./Controllers/RESTControllers";
import Container from "typedi";
import { containerSetup } from "@root/ContainerSetup";
import { middlewares } from "./Middlewares/middlewares";
useContainer(Container);
function setExpressApplicationWithControllers(
	controllers: Array<{ new (...args: any[]): any }> | string[]
): express.Express {
	const app = express();
	app.use(express.json());
	app.use(express.urlencoded({ extended: true }));
	useExpressServer(app, {
		controllers: controllers,
		middlewares: middlewares,
		defaultErrorHandler: false,
	});
	return app;
}
export function setupExpressApplication(): express.Express {
	return setExpressApplicationWithControllers(RESTControllers);
}
export async function setupServer() {
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
