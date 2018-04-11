import mongoose from 'mongoose';
import DB_CONFIG from '../config/db.config.json';

class Connection {
	constructor(){
		mongoose.connect()
	}
}
module.exports = Connection;