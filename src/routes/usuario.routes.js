import {Router} from "express";
import { obtenerUsuarios, obtenerUsuarioPorID, crearUsuario, actualizarUsuario, eliminarUsuario } from "../controller/usuario.controller.js";
const router = Router();



router.get('/usuarios', obtenerUsuarios );
router.get('/usuarios/:id', obtenerUsuarioPorID );
router.post('/usuarios', crearUsuario );
router.put('/usuarios/:id', actualizarUsuario );
router.delete('/usuarios/:id', eliminarUsuario );

export default router; 
