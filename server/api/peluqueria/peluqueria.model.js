import Ajv from 'ajv';

class PeluqueriaModel {
	schema = {
		additionalProperties: false,
		properties: {
			nombre_peluqueria : {
				type: 'string'
			},
			direccion_peluqueria: {	
				type: 'string'
			},
			metros_cuadrados_peluqueria: {
				type: 'string'
			},
			id_contribuyente: {
				type : 'Int'
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
module.exports = PeluqueriaModel