const providerService = require('../services/providers.service');

//hay que importar providers.model.js

//aquí abajo hago referencia a las rutas

//READ ALL
const obtenerProviders = async (req, res) => {
    try {
        const providers = await providerService.obtenerTodosLosProviders();
        res.json(providers);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};
// READ ONE
const obtenerProvider = async (req, res) => {
    try {
        const provider = await providerService.obtenerProviderPorId(req.params.id);
        if (provider) {
            res.json(provider);
        } else {
            res.status(404).json({ mensaje: 'Provider no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

//CREATE
const crearProvider = async (req, res) => {
    try {
        const nuevoProvider = await providerService.crearProvider(req.body);
        res.status(201).json(nuevoProvider);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

//UPDATE
const actualizarProvider = async (req, res) => {
    try {
        const providerActualizado = await providerService.actualizarProvider(req.params.id, req.body);
        if (providerActualizado) {
            res.json(providerActualizado);
        } else {
            res.status(404).json({ mensaje: 'Provider no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

// const eliminarProvider = async (req, res) => {
//     try {
//         const provider = await providerService.eliminarProvider(req.params.id);
//         if (provider) {
//             res.json({ mensaje: 'Provider eliminado' });
//         } else {
//             res.status(404).json({ mensaje: 'Provider no encontrado' });
//         }
//     } catch (error) {
//         res.status(500).json({ mensaje: error.message });
//     }
// };

//DELETE
const eliminarProvider = async (req, res) => {
    try {
        const proveedor = await providerService.eliminarProvider(req.params.id);
        
        // Verificamos el resultado del servicio
        if (proveedor.success) {
            res.json({ mensaje: proveedor.message }); // Mensaje de éxito
        } else {
            res.status(400).json({ mensaje: proveedor.message }); // Mensaje de error
        }
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

module.exports = {
    obtenerProviders,
    obtenerProvider,
    crearProvider,
    actualizarProvider,
    eliminarProvider
};