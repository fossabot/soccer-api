import nodemailer from 'nodemailer';
import CONFIG from '../../../config/mail.config.json';
import TemplateBuilder from './templateBuilder';
import Logger from '../../tools/logger.tool';

class IVEmail {
	constructor() {
		this.log = new Logger(this.constructor.name);
		//CONFIG.client.auth.pass = encryptor.decrypt(CONFIG.client.auth.pass);
		this.transporter = nodemailer.createTransport(CONFIG.client);
		this.send = this.send.bind(this);
	}
	send(email = {}) {

		let templateBuilder = new TemplateBuilder(email);
		//Envia el correo 
		return new Promise((resolve, reject) => {
			this.transporter.sendMail(templateBuilder, (error, info) =>
				error ?
				reject(this.log.error(error)) :
				resolve(this.log.info(info)));
		})

	}
}

module.exports = IVEmail;