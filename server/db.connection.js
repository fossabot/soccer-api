import mongoose from 'mongoose';
import DB_CONFIG from '../config/db.config.json';

/**
 * @SINGLETON 
 * Clase estatica que administra la conexión a la base de datos
 */
class Connection {
	/*
	 */
	static connect() {
		this.instance = mongoose.createConnection(process.env.CONNECTION_STRING);
		this.instance.on('error', (err) => console.log('Ha ocurrido un error en la base de datos' + err))
		return new Promise((resolve, reject) => {
			this.instance.once('open', () => {
				console.log('✔️  MONGO DB CONNECTED');
				//La conexión ha finalizado satisfactoriamente 
				resolve(true);
			})
		});

	}

}

module.exports = Connection;