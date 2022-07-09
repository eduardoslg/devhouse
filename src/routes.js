import { Router } from "express";
import multer from "multer";
import uploadConfig from './config/upload'

import SessionController from "./controllers/SessionController";
import HouseController from "./controllers/HouseController";

const routes = new Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store)

// Adiciona uma casa
routes.post('/houses', upload.single('thumbnail'), HouseController.store);
// Lista todas as casas, como true ou false
routes.get('/houses', HouseController.index);
// Edita uma casa buscando pelo house_id
routes.put('/houses/:house_id', upload.single('thumbnail'), HouseController.update);



export default routes;