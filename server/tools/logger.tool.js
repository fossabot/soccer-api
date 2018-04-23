import log from 'simple-node-logger';
import SERVER_CONFIG from '../../config/server.config.json';

const logger = log.createSimpleLogger('./logs/logger.log');
logger.setLevel(SERVER_CONFIG.logLevel);

class Logger {

	constructor(className) {
		this.className = className;
	}

	info(message) {
		logger.info(`🎌 INFO ON ${this.className}`);
		logger.info(message);
		return message;
	}

	warn(message) {
		logger.warn(`⚠️️ WARN ON ${this.className}`);
		logger.warn(message);
		return message;
	}

	error(message) {
		logger.error(`💀 ERROR ON ${this.className}`);
		logger.error(message);
		return message;
	}

}

module.exports = Logger;