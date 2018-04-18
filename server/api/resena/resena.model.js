import mongoose from 'mongoose';
import Connection from '../../db.connection';
import RESENA_SCHEMA from './resena.schema.json';
import Ajv from 'ajv';
/**
 * Clase encargada de estructurar el esquema de la entidad MResena
 * asì como atributos y funciones 
 * @class MResena
 */
class MResena {
	/**
	 * Creates an instance of MResena.
	 * @memberof MResena
	 */
	constructor() {
		this.schema = mongoose.Schema({
			//attrs
			id: Number,
			//1-5
			puntaje: Number,
			descripcion: String,
		});
		//Funciones del modelo
		this.schema.methods = {
			police: this.police
		};
		//Instancia para validar la trama de entrada
		return Connection.instance.model('MResena', this.schema);
	}
	/**
	 * Funciòn estatica 
	 * Retorna falso o verdadero dependiendo si la trama corresponde con la validaciòn
	 * @param {any} reqBody es la trama a evaluar
	 * @returns Boolean
	 * @memberof MResena
	 */
	police(reqBody) {
		return new Ajv().compile(RESENA_SCHEMA)(reqBody);
	}
}

module.exports = MResena;