import mongoose, { Schema } from 'mongoose';
import Connection from '../../db.connection';
import EQUIPO_SCHEMA from './equipo.schema.json';
import Ajv from 'ajv';
/**
 * Clase encargada de estructurar el esquema de la entidad MEquipo
 * asì como atributos y funciones 
 * @class MEquipo
 */
class MEquipo {
	/**
	 * Creates an instance of MEquipo.
	 * @memberof MEquipo
	 */
	constructor() {
		this.schema = mongoose.Schema({
			//attrs
			id: Number,
			nombre: String,
			descripcion: String,
			foto: String,
			categoria: String,
			privado: Boolean,
			estado: {
				type: String,
				default: 'A'
			},
			integrantes: [{
				type: Schema.Types.ObjectId,
				ref: 'MJugador'
			}]
		});
		//Funciones del modelo
		this.schema.methods = {
			police: this.police
		};
		//Instancia para validar la trama de entrada
		return Connection.instance.model('MEquipo', this.schema);
	}
	/**
	 * Funciòn estatica 
	 * Retorna falso o verdadero dependiendo si la trama corresponde con la validaciòn
	 * @param {any} reqBody es la trama a evaluar
	 * @returns Boolean
	 * @memberof MEquipo
	 */
	police(reqBody) {
		return new Ajv().compile(EQUIPO_SCHEMA)(reqBody);
	}
}

module.exports = MEquipo;