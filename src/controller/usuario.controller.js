


export const obtenerUsuarios = (req, res) => {
    res.status(200).send("Obtener todos los usuarios.");
};

export const obtenerUsuarioPorID = (req, res) => {
    res.status(200).send("Obtener un usuario por su id_usuario.");
};

export const crearUsuario = (req, res ) =>{
    res.status(201).send("Crear un nuevo usuario.")
};

export const actualizarUsuario = (req, res) => {
    res.status(204).send("Actualizar los datos de un usuario.");
};

export const eliminarUsuario = (req, res) => {
    res.status(204).send("Eliminar un usuario.");
};