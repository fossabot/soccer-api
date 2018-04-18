import Log from 'simple-node-logger';
import fs from 'fs';
import EMAIL_CONFIG from '../../../config/mail.config.json';
import TEMPLATES_CONFIG from '../../../config/templates.config.json';

class TemplateBuilder {

	constructor(email) {
		this.email = email;
		this.log = Log.createSimpleLogger('logs/server.log');
		this.log.setLevel('all');
		return this.builder(JSON.parse(JSON.stringify(TEMPLATES_CONFIG[this.email.template])));
	}

	/**
	 * Se adjuntas las variables @@ en caso de haber metadata en el cuerpo del template, 
	 * sino solo se borrará
	 */
	prepareTemplate(template) {
		template.html = fs.readFileSync(__dirname + `/templates/${template.html}`, 'utf8');
		for (let key in template) {
			for (let metaKey in this.email.metadata) {
				template[key] = template[key].replace(`@@${metaKey}`, this.email.metadata[metaKey] || '');
			}
		}
	}

	//Función encargada de construir el cuerpo del correo electronico
	builder(template) {
		this.prepareTemplate(template);
		return {
			from: `"Monotributo"<${EMAIL_CONFIG.client.auth.user}>`,
			to: this.email.to,
			subject: template.subject,
			html: template.html
		}
	}

}

module.exports = TemplateBuilder;