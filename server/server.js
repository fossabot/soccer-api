//External imports
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import Router from './api/router';
import fs from 'fs';
import cors from 'cors'
import Connection from './db.connection';
//Config
import SERVER_CONFIG from '../config/server.config.json';


class Server {
	constructor() {
		this.app = express();
		this.app.use(cors());
		this.app.use(bodyParser.urlencoded({extended: false}));
		this.app.use(bodyParser.json());
		this.app.use(morgan('common', {stream: fs.createWriteStream('./logs/access.log', {flags: 'a'})}));
		//Console logger
		this.app.use(morgan('dev'));

		Connection.connect()
			.then((connection)=>{
				this.router = new Router(this.app);
				this.start();
			});
	}

	start() {
		this.app.listen(SERVER_CONFIG.port, this.connected);
		this.app.on('error', () => {
			console.log('Fuck off');
		});
	}

	connected() {
		console.log(`✔️  REST API CONNECTED PORT: ${SERVER_CONFIG.port}`);
	}
}

module.exports = Server;