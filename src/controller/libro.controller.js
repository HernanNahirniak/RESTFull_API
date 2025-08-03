



export const obtenerLibros = (req, res) => {
    res.status(200).send("Obtener todos los libros.");
};

export const obtenerLibroPorID = (req, res) => {
    res.status(200).send("Obtener un libro por su id_libro.");
};

export const crearLibro = (req, res) => {
    res.status(201).send("Crear un nuevo libro.");
};

export const actualizarLibro = (req, res) => {
    res.status(204).send("Actualizar los datos de un libro.");
};

export const actualizarExistenciaLibro = (req , res) => {
    res.status(204).send("Actualizar la existencia de un libro (cantidad disponible)");
};

export const eliminarLibro = (req, res) => {
    res.status(204).send("Eliminar un libro.");
};

export const obtenerLibrosDisponibles = (req, res) => {
    res.status(200).send("Obtener todos los libros con existencia disponible para préstamos.");
};