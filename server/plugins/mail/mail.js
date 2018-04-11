import nodemailer from 'nodemailer';
import CONFIG from '../../../config/mail.config.json'
import TemplateBuilder from './templateBuilder';

var encryptor = require('simple-encryptor')('IVSECRET IVSECRET IVSECRET IVSECRET');

class IVEmail {
	constructor() {
		//CONFIG.client.auth.pass = encryptor.decrypt(CONFIG.client.auth.pass);
		this.transporter = nodemailer.createTransport(CONFIG.client);
		this.send = this.send.bind(this);
	}
	send(email = {}) {

		let templateBuilder = new TemplateBuilder(email);
		//Envia el correo 
		return new Promise((res, rej) => {
			this.transporter.sendMail(templateBuilder, (error, info) => error ? rej(error) : res(info));
		})

	}
}

module.exports = IVEmail;