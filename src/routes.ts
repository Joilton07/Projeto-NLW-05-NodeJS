import {Router} from "express";

const routes = Router();

import {SettingsController} from "./controllers/SettingsController";

const settingsController = new SettingsController();

/**
 * Tipos de Parametros
 * Routes Params => Parametros de rotas
 * http:// localhost:3333/settings/1
 * Query Params => Filtros e Buscas
 * http:// localhost:3333/settings/1?search=algumacoisa
 * 
 * Body params => {
 * 
 * }
 */

routes.post("/settings", settingsController.create);

export {routes};