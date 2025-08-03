import express from 'express';
import libroRouter from './src/routes/libro.routes.js';
import prestamoRouter from './src/routes/prestamo.routes.js';
import reseñaRouter from './src/routes/reseñas.routes.js';
import usuarioRouter from './src/routes/usuario.routes.js';

const app = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({extended:true}))

app.use(libroRouter);
app.use(prestamoRouter);
app.use(reseñaRouter);  
app.use(usuarioRouter);



app.listen(8080, () => {
    console.log("Servidor escuchando en http://localhost:8080");
});