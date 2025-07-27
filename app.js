import express from 'express';
const app = express();


//========================= Usuarios

app.get('/usuarios', (req, res) => {
    res.send("Obtener todos los usuarios");
});

app.get('/usuarios/:id', (req, res) => {
    res.send("Obtener un usuario por su id_usuario.");
});

app.post('/usuarios', (req, res ) =>{
    res.send("Crear un nuevo usuario.")
})

app.put('/usuarios/:id', (req, res) => {
    res.send("Actualizar los datos de un usuario.");
});

app.delete('/usuarios/:id', (req, res) => {
    res.send("Eliminar un usuario.");
});


//========================= Libros

app.get('/libros', (req, res) => {
    res.send("Obtener todos los libros.");
});

app.get('/libros/:id', (req, res) => {
    res.send("Obtener un libro por su id_libro. (o cualquiera de sus campos)");
});

app.post('/libros', (req, res) => {
    res.send("Crear un nuevo libro.");
});

app.put('/libros/:id', (req, res) => {
    res.send("Actualizar los datos de un libro.");
});

app.put('/libros/:id/existencia', (req, res) => {
    res.send("Actualizar la existencia de un libro (cantidad disponible)");
});

app.delete('/libros/:id', (req, res) => {
    res.send("Eliminar un libro.");
});


//========================= Prestamos

app.get('/prestamos', (req, res) => {
    res.send("Obtener todos los préstamos");
});

app.get('/prestamos/:id', (req, res) => {
    res.send("Obtener un préstamo por su id_préstamos.");
});

app.post('/prestamos', (req, res ) =>{
    res.send("Crear un nuevo préstamo (reserva de un libro).")
})

app.put('/prestamos/:id', (req, res) => {
    res.send("Actualizar los datos de un préstamo (por ejemplo, fechas de devolución).");
});

app.delete('/prestamos/:id', (req, res) => {
    res.send("Eliminar un préstamo.");
});

// =========================Reseñas

app.get('/resenias', (req, res) => {
    res.send("Obtener todas las reseñas.");
});


app.get('/resenias/:id', (req, res) => {
    res.send("Obtener una reseña por su id_resenia.");
});

app.get('/resenias/libro/:id_libro', (req, res) => {
    res.send("Obtener reseñas de un libro específico.");
});

app.post('/resenias', (req, res ) =>{
    res.send("Crear una nueva reseña.")
})

app.put('/resenias/:id', (req, res) => {
    res.send("Actualizar una reseña existente.");
});

app.delete('/resenias/:id', (req, res) => {
    res.send("Eliminar una reseña.");
});


//=========================Logicas especificas

app.get('/libros/disponibles', (req, res) => {
    res.send("Obtener todos los libros con existencia disponible para préstamos.");
});

app.get('/prestamos/usuario/:id_usuario', (req, res) => {
    res.send("Obtener todos los préstamos de un usuario específico.");
});

app.get('/prestamos/libro/:id_libro', (req, res) => {
    res.send("Obtener todos los préstamos realizados para un libro específico.");
});



app.listen(8080, () => {
    console.log("Servidor escuchando en http://localhost:8080");
});