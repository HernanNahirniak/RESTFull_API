import {Router} from "express";
import { obtenerLibros, obtenerLibroPorID, crearLibro, actualizarLibro, actualizarExistenciaLibro, eliminarLibro, obtenerLibrosDisponibles } from "../controller/libro.controller.js"
const router = Router();


router.get('/libros', obtenerLibros);
router.get('/libros/:id', obtenerLibroPorID);
router.post('/libros', crearLibro);
router.put('/libros/:id', actualizarLibro);
router.put('/libros/:id/existencia', actualizarExistenciaLibro);
router.delete('/libros/:id', eliminarLibro);
app.get('/libros/disponibles', obtenerLibrosDisponibles);

export default router; 