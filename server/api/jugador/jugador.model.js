import mongoose from 'mongoose';
import Connection from '../../db.connection';
import JUGADOR_SCHEMA from './jugador.schema.json';
import Ajv from 'ajv';
import IVEmail from '../../plugins/mail/mail';
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
			estado: {
				type: String,
				default: 'A'
			},
			urlFoto: String,
			descripcion: String,
			confirmado: {
				type: Boolean,
				default: false
			}
		});
		//Funciones del modelo
		this.schema.methods = {
			police: this.police,
			sendMailConfirm: this.sendMailConfirm
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


	sendMailConfirm(id){
		this.model('MJugador').findById(id)
			.then(entity => {
				console.log(entity);
				entity.confirmEmail('5adbe8456306a20e80324cf8');
				
			})
			.catch(err => res.send(err));
	}
}

module.exports = MJugador;