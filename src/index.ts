import "reflect-metadata";
import "module-alias/register";
import { setupServer } from "./Presentations/server";
import { containerSetup } from "./ContainerSetup";
containerSetup();
setupServer();
