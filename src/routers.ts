import Express from "express";
import { create, show, remove } from "./controllers/controlles.js";

const routes = Express.Router();

routes.post("/create", create);
routes.get("/show", show);
routes.delete("/show/:id", remove);

export default routes;
