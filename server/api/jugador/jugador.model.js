import mongoose from 'mongoose';
import Connection from '../../db.connection';
import JUGADOR_SCHEMA from './jugador.schema.json';
import Ajv from 'ajv';
import IVEmail from '../../plugins/mail/mail';
import SERVER_CONFIG from '../../../config/server.config.json'
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
			urlFoto: {
				type:String,
				default: '/assets/imgs/player.png'
			},
			descripcion: String,
			confirmado: {
				type: Boolean,
				default: false
			}
		});
		//Funciones
		this.schema.methods = {
			police: this.police,
			sendMailConfirm: this.sendMailConfirm
		};
		//Triggers
		this.schema.post('save', this.afterTrigger)
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

	sendMailConfirm() {
		let mail = {
			template: 'BIENVENIDO',
			to: this.correo,
			metadata: {
				nombreUsuario: `${this.apellido} ${this.nombre}`,
				confirmEmailApi: `${SERVER_CONFIG.protocol}://${SERVER_CONFIG.domain}:${SERVER_CONFIG.port}/jugador/confirmEmail/${this._id}`
			}
		};
		return new IVEmail().send(mail);
	}

	afterTrigger(jugador, next) {
		return jugador.confirmado ? Promise.resolve(true) : jugador.sendMailConfirm();
	}
}

module.exports = MJugador;