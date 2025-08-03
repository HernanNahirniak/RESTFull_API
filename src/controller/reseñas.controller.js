



export const obtenerResenias = (req, res) => {
    res.status( 200 ).send("Obtener todas las reseñas.");
};

export const obtenerReseñaPorID = (req, res) => {
    res.status(200).send("Obtener una reseña por su id_resenia.");
};

export const obtenerReseniaPorIDLibro = (req, res) => {
    res.status(200).send("Obtener reseñas de un libro específico.");
};

export const crearReseña = (req, res ) =>{
    res.status(201).send("Crear una nueva reseña.")
};

export const actualizarReseña = (req, res) => {
    res.status(204).send("Actualizar una reseña existente.");
};

export const eliminarReseña = (req, res) => {
    res.status(204).send("Eliminar una reseña.");
};


