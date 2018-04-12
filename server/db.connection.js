import mongoose from 'mongoose';
import DB_CONFIG from '../config/db.config.json';

class Connection {
	constructor(){
		console.log(process.env.CONNECTION_STRING)
		this.db = mongoose.createConnection(process.env.CONNECTION_STRING);
		this.db.once('open', ()=>  console.log('✔️  MONGO DB CONNECTED'))
		this.db.on('error', (err)=> console.log('Ha ocurrido un error en la base de datos'+err))
		return  this.db;
	}
}

module.exports = Connection;