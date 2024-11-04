const Producto = require("../models/products.model")
const Provider = require('../models/providers.model');

//READ ALL
const obtenerTodosLosProductos = async () => {
     //return await Producto.find();
    return await Producto.find({}, '-_id -__v').populate('provider', '-_id -__v');
};

//READ ONE
const obtenerProductoPorId = async (id) => {
    // return await Producto.findById(id);
        return await Producto.findById(id, '-_id -__v').populate('provider', '-_id -__v');
};

//CREATE
const crearProducto = async (datosProducto) => {
    const producto = new Producto(datosProducto);    
    return await producto.save();
};

//UPDATE
const actualizarProducto = async (id, datosProducto) => {
    return await Producto.findByIdAndUpdate(id, datosProducto, { new: true });
};

//DELETE
const eliminarProducto = async (id) => {
    return await Producto.findByIdAndDelete(id);
};


module.exports = {
    obtenerTodosLosProductos,
    obtenerProductoPorId,
    crearProducto,
    actualizarProducto,
    eliminarProducto
};