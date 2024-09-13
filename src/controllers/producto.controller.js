import MongoDBProductoDAO from "../dao/mongoDBProductoDao.js";

const productoService = new MongoDBProductoDAO();

class ProductoController {
  async getProductos(req,res) {
    try {
      const productos = await productoService.obtenerProductos();
      res.json(productos);
    } catch (error) {
      res.send("Error interno del servidor.")
    }
  }

  async postProducto(req,res) {
    try {
      const producto = await productoService.crearProducto(req.body);
      res.json(producto);
    } catch (error) {
      res.send("Error interno del servidor.")
    }
  }
}

export default ProductoController;