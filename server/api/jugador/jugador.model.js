import mongoose from 'mongoose';
import Connection from '../../db.connection';

class MJugador  {
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

		this.schema.methods = {
			getLogin: this.getLogin,
			registrar: this.registrar
		};

		return Connection.instance.model('MJugador', this.schema);
	}

	getLogin() {
		console.log('55');
		return 55;
	}

	registrar() {
		return 50;
	}
}

module.exports = MJugador;
