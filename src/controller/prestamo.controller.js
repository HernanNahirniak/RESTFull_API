



export const obtenerPrestamos = (req, res) => {
    res.status(200).send("Obtener todos los préstamos");
};

export const obtenerPrestamoPorID = (req, res) => {
    res.status(200).send("Obtener un préstamo por su id_préstamos.");
};

export const crearPrestamo = (req, res ) =>{
    res.status(201).send("Crear un nuevo préstamo (reserva de un libro).")
};

export const actualizarPrestamos = (req, res) => {
    res.status(204).send("Actualizar los datos de un préstamo (por ejemplo, fechas de devolución).");
};

export const eliminarPrestamo = (req, res) => {
    res.status(204).send("Eliminar un préstamo.");
};

export const prestamoPorUsuario =(req, res) => {
    res.status(200).send("Obtener todos los préstamos de un usuario específico.");
};

export const prestamoPorLibro = (req, res) => {
    res.status(200).send("Obtener todos los préstamos realizados para un libro específico.");
};
