import {Router} from "express";
import { obtenerResenias, obtenerReseñaPorID, obtenerReseniaPorIDLibro, crearReseña, actualizarReseña, eliminarReseña } from "../controller/reseñas.controller.js";
const router = Router();



router.get('/resenias', obtenerResenias );
router.get('/resenias/:id', obtenerReseñaPorID );
router.get('/resenias/libro/:id_libro', obtenerReseniaPorIDLibro );
router.post('/resenias', crearReseña );
router.put('/resenias/:id', actualizarReseña );
router.delete('/resenias/:id', eliminarReseña );


export default router; 
