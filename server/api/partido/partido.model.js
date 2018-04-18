import mongoose, { Schema } from 'mongoose';
import Connection from '../../db.connection';
import PARTIDO_SCHEMA from './partido.schema.json';
import Ajv from 'ajv';
/**
 * Clase encargada de estructurar el esquema de la entidad MPartido
 * asì como atributos y funciones 
 * @class MPartido
 */
class MPartido {
	/**
	 * Creates an instance of MPartido.
	 * @memberof MPartido
	 */
	constructor() {
		this.schema = mongoose.Schema({
			//attrs
			id: Number,
			marcador: String,
			lugar: String,
			estado: {
				type: String,
				default: 'A'
			},
			fecha: String,
			equipos: [{
				type: Schema.Types.ObjectId,
				ref: "MEquipo"
			}],
			resenas:  [{
				type: Schema.Types.ObjectId,
				ref: "MResena"
			}]
		});
		//Funciones del modelo
		this.schema.methods = {
			police: this.police
		};
		//Instancia para validar la trama de entrada
		return Connection.instance.model('MPartido', this.schema);
	}
	/**
	 * Funciòn estatica 
	 * Retorna falso o verdadero dependiendo si la trama corresponde con la validaciòn
	 * @param {any} reqBody es la trama a evaluar
	 * @returns Boolean
	 * @memberof MPartido
	 */
	police(reqBody) {
		return new Ajv().compile(PARTIDO_SCHEMA)(reqBody);
	}
}

module.exports = MPartido;