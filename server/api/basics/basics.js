import IVEmail from '../../plugins/mail/mail';
import IVSms from '../../plugins/sms/sms';
import LOGGER from '../../tools/logger.tool';
import express from 'express';
import path from 'path'

//@API
class Basics {
	constructor() {
		//Binding
		this.sendMail = this.sendMail.bind(this);
		this.sendSms = this.sendSms.bind(this)
		this.router = express.Router();
		this.path = '/basics';
		this.router.post(`${this.path}/sendMail`, this.sendMail);
		this.router.post(`${this.path}/sendSms`, this.sendSms);
		return this.router;
	}

	sendSms(req, res) {
		new IVSms().send(req.body.message, req.body.from, req.body.to)
			.then(response => res.send(response))
			.catch(err => res.send(err));
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
		new IVEmail().send(req.body)
			.then(response => res.send(response))
			.catch(err => res.send(err));
	}
}

module.exports = Basics;