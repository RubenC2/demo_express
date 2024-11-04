const Product = require('../models/products.model');
const productService = require('../services/products.service');

// CREATE
const crearProducto = async (req, res) => {
  try {
      const nuevoProducto = await productService.crearProducto(req.body);
      res.status(200).json({ mensaje: "Producto creado: ", nuevoProducto });
  } catch (error) {
      res.status(500).json({ mensaje: error.message });
  }
};


//READ ALL
const obtenerProductos = async (req, res) => {
  try {
      const productos = await productService.obtenerTodosLosProductos();
      res.json(productos);
    } catch (error) {
      res.status(500).json({ mensaje: error.message });
  }
};

//READ ONE
const obtenerProducto = async (req, res) => {
  try {
    if (req.params.id) {
      const producto = await productService.obtenerProductoPorId(req.params.id);
          res.json(producto)
    } else {
      const productos = await productService.obtenerTodosLosProductos();
      res.json(productos);
      }
  } catch (error) {
      res.status(500).json({ mensaje: error.message });
  }
};


// UPATE
const actualizarProducto = async (req, res) => {
  try {
    if (req.params.id) {
      const producto = await productService.actualizarProducto(req.params.id, req.body);
      res.status(200).json({ mensaje: "Producto editado!", producto });
    } else {
      return res.status(400).json({ mensaje: "ID del producto requerido" });
    }
  } catch (error) {
      res.status(500).json({ mensaje: error.message });
  }
}

// DELETE
const eliminarProducto = async (req, res) => {
    try {
      if (req.params.id) {
        const producto = await productService.eliminarProducto(req.params.id);
        res.status(200).send("Producto borrado!. Has borrado: "+ producto.title);
      } else {
        return res.status(400).json({ mensaje: "ID del producto requerido" });
      }
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
  }


module.exports = {
    crearProducto,
    obtenerProductos,
    obtenerProducto,
    actualizarProducto,
    eliminarProducto
}