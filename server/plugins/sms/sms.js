import Nexmo from 'nexmo';
import SMS_CONFIG from '../../../config/sms.config.json';

import Logger from '../../tools/logger.tool'

class IVSms {
	constructor() {
		this.send = this.send.bind(this);
		this.log = new Logger(this.constructor.name);
		try {
			this.nexmo = new Nexmo(SMS_CONFIG.NEXMO_CONFIG);
		} catch (error) {
			this.log.error(error);
		}
	}

	send(message, from = SMS_CONFIG.from, to = SMS_CONFIG.to) {
		return new Promise((resolve, reject) =>
			this.nexmo.message.sendSms(from, to, message, (err, response) =>
				err ?
				reject(this.log.error(err)) :
				resolve(this.log.info(response))
			)
		);
	}
}
module.exports = IVSms;