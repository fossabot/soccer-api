import Ajv from 'ajv';

class ContribuyenteModel {
	schema = {
		additionalProperties: false,
		properties: {
			nombre_contribuyente : {
				type: 'string'
			},
			apellido_contribuyente: {	
				type: 'string'
			},
			correo_contribuyente: {
				type: 'string'
			},
			contrasena: {
				type :'string'
			}
		}
	};
	constructor() {
		this.ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}
		this.validate = this.ajv.compile(this.schema);
	}

	police(reqBody) {
		return this.validate(reqBody);
	}

}
module.exports = ContribuyenteModel