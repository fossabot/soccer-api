import Ajv from 'ajv';

class CategoriaModel {
	schema = {
		additionalProperties: false,
		properties: {
			nombre_categoria : {
				type: 'string'
			},
			minimo: {	
				type: 'numeric'
			},
			maximo: {
				type: 'numeric'
			},
			valor_tributo: {
				type: 'numeric'
			},
			id_ano_gravable: {
				type: 'int'
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
module.exports = CategoriaModel