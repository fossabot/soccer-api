import mongoose from 'mongoose';
import Connection from '../../db.connection';
import JUGADOR_SCHEMA from './jugador.schema.json';
import Ajv from 'ajv';
/**
 * Clase encargada de estructurar el esquema de la entidad MJugador
 * asì como atributos y funciones 
 * @class MJugador
 */
class MJugador {
	/**
	 * Creates an instance of MJugador.
	 * @memberof MJugador
	 */
	constructor() {
		this.schema = mongoose.Schema({
			//attrs
			id: Number,
			nombre: String,
			apellido: String,
			correo: String,
			contrasena: String,
			lider: Boolean,
			estado: String,
			urlFoto: String,
			descripcion: String,
		});
		//Funciones del modelo
		this.schema.methods = {
			police: this.police
		};
		//Instancia para validar la trama de entrada
		return Connection.instance.model('MJugador', this.schema);
	}
	/**
	 * Funciòn estatica 
	 * Retorna falso o verdadero dependiendo si la trama corresponde con la validaciòn
	 * @param {any} reqBody es la trama a evaluar
	 * @returns Boolean
	 * @memberof MJugador
	 */
	police(reqBody) {
		return new Ajv().compile(JUGADOR_SCHEMA)(reqBody);
	}
}

module.exports = MJugador;