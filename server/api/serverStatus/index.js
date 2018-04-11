import IVEmail from '../../plugins/mail/mail';
import Log from 'simple-node-logger';
import express from 'express';
import path from 'path'
// and accessed via process.env.MY_SECRET_KEY

//@API
class ServerStatus {
	constructor(dbConnection) {
		//Binding
		this.sendMail = this.sendMail.bind(this);
		//
		this.router = express.Router();
		this.path = '/status';
		this.logger = Log.createSimpleLogger(require('../../../logs/server.log'));
		this.router.post(`${this.path}/testMail`, this.sendMail);

		return this.router;
	}

	/**
	 * {
			to:'mortombolo@gmail.com',
			template: 'BIENVENIDO',
			metadata: {
				"nombreUsuario": "ffff"
			}
		}
	 */
	sendMail(req, res) {
		let email = new IVEmail();
		email.send(req.body).then((resolve, reject) => {
			res.send(reject || resolve);
		});
	}
}

module.exports = ServerStatus;