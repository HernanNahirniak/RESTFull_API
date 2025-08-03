import {Router} from "express";
import { obtenerPrestamos, obtenerPrestamoPorID, crearPrestamo, actualizarPrestamos, eliminarPrestamo, prestamoPorLibro, prestamoPorUsuario } from "../controller/prestamo.controller.js";
const router = Router();




router.get('/prestamos', obtenerPrestamos);
router.get('/prestamos/:id', obtenerPrestamoPorID );
router.post('/prestamos', crearPrestamo );
router.put('/prestamos/:id', actualizarPrestamos );
router.delete('/prestamos/:id', eliminarPrestamo );
app.get('/prestamos/usuario/:id_usuario', prestamoPorUsuario );
app.get('/prestamos/libro/:id_libro',prestamoPorLibro );

export default router; 
