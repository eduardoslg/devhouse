import { Router } from "express";
import multer from "multer";
import uploadConfig from './config/upload'

import SessionController from "./controllers/SessionController";
import HouseController from "./controllers/HouseController";
import DashBoardController from './controllers/DashBoardController';
import ReserveController from "./controllers/ReserveController";

const routes = new Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store)

// Adiciona uma casa
routes.post('/houses', upload.single('thumbnail'), HouseController.store);
// Lista todas as casas, como true ou false
routes.get('/houses', HouseController.index);
// Edita uma casa buscando pelo house_id
routes.put('/houses/:house_id', upload.single('thumbnail'), HouseController.update);
// Deletando uma casa
routes.delete('/houses', HouseController.destroy);

// Listar as casas que o usuário cadastrou
routes.get('/dashboard', DashBoardController.show);

// Soliciar reserva em alguma casa
routes.post('/houses/:house_id/reserve', ReserveController.store);

// Nessa roda ele vai conseguir listar suas reservas
routes.get('/reserves', ReserveController.index);

// Rota para deletar/cancelar alguma reserva
routes.delete('/reserves/cancel', ReserveController.destroy);

export default routes;