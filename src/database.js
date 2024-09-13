// import mongoose from "mongoose";
// // Importo configObject:
// import configObject from "./config/config.js";
// const {mongo_url} = configObject;

// mongoose.connect(mongo_url)
//     .then(() => console.log("Conexion exitosa!"))
//     .catch((error) => console.log("Error de conexion.", error))


// Patron de diseño Singleton:
import mongoose from "mongoose";
// Importo configObject:
import configObject from "./config/config.js";
import _ from "mongoose-paginate-v2";
const {mongo_url} = configObject;

class BaseDatos {
    static #instancia;
    constructor() {
        mongoose.connect(mongo_url);
    }

    static getInstancia() {
        if(this.#instancia) {
            console.log("Conexion previa.");
            return this.#instancia;
        } else {
            this.#instancia = new BaseDatos();
            console.log("Conexion exitosa.");
            return this.#instancia;
        }
    }
}

export default BaseDatos.getInstancia();
