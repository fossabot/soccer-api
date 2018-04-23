import Log from 'simple-node-logger';
import fs from 'fs';
import Logger from '../../tools/logger.tool';
import EMAIL_CONFIG from '../../../config/mail.config.json';
import TEMPLATES_CONFIG from '../../../config/templates.config.json';

class TemplateBuilder {

	constructor(email) {
		this.log = new Logger(this.constructor.name);
		this.email = email;
		return this.builder(JSON.parse(JSON.stringify(TEMPLATES_CONFIG[this.email.template])));
	}

	/**
	 * Se adjuntas las variables @@ en caso de haber metadata en el cuerpo del template, 
	 * sino solo se borrará
	 */
	prepareTemplate(template) {
		try {
			template.html = fs.readFileSync(__dirname + `/templates/${template.html}`, 'utf8');
			for (let key in template) {
				for (let metaKey in this.email.metadata) {
					template[key] = template[key].replace(`@@${metaKey}`, this.email.metadata[metaKey] || '');
				}
			}
		} catch (error) {
			this.log.error(error);
		}
	}

	//Función encargada de construir el cuerpo del correo electronico
	builder(template) {
		this.prepareTemplate(template);
		return {
			from: `"Soccer League"<${EMAIL_CONFIG.client.auth.user}>`,
			to: this.email.to,
			subject: template.subject,
			html: template.html
		}
	}

}

module.exports = TemplateBuilder;