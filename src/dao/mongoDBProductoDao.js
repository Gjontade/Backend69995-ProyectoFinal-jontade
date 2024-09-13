import ProductoModel from "../dao/models/product.model.js";

class MongoDBProductoDAO {

    async crearProducto(datosProducto){
        try {
            const producto = new ProductoModel(datosProducto); 
            return await producto.save(); 
        } catch (error) {
            throw new Error("Error al crear el producto en MongoDB.");
        }
    }

    async obtenerProductos(){
        try {
            return await ProductoModel.find(); 
        } catch (error) {
            throw new Error("Error al obtener los productos desde MongoDB.");
        }

    }

}

export default MongoDBProductoDAO;