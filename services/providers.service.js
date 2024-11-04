//imoprta el modelo
//son metodos (CRUD) que llamamos desde el controller 
//"sustituye" al documento de queries de sql 
const Product = require("../models/products.model")
const Provider = require('../models/providers.model');

const obtenerTodosLosProviders = async () => {
    return await Provider.find();
};

const obtenerProviderPorId = async (id) => {
    return await Provider.findById(id);
};

const crearProvider = async (datosProvider) => {
    const provider = new Provider(datosProvider);    
    return await provider.save();
};

const actualizarProvider = async (id, datosProvider) => {
    return await Provider.findByIdAndUpdate(id, datosProvider, { new: true });
};

// const eliminarProvider = async (id) => {
//     return await Provider.findByIdAndDelete(id);
// };

const eliminarProvider = async (id) => {
    // Verificamos si hay productos relacionados con el proveedor
    const relatedProducts = await Product.find({ provider: id });

    if (relatedProducts.length > 0) {
        return { success: false, message: "No se puede eliminar el proveedor porque tiene productos relacionados." };
    }

    // Si no hay productos, procedemos a eliminar el proveedor
    const deletedProvider = await Provider.findByIdAndDelete(id);
    
    if (!deletedProvider) {
        return { success: false, message: "Proveedor no encontrado." };
    }

    return { success: true, message: "Proveedor eliminado correctamente." };
};

module.exports = {
    obtenerTodosLosProviders,
    obtenerProviderPorId,
    crearProvider,
    actualizarProvider,
    eliminarProvider
};