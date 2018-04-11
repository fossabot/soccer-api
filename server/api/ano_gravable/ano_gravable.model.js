import Ajv from 'ajv';

class AnoGravableModel {
	schema = {
		additionalProperties: false,
		properties: {
			ano : {
				type: 'string'
			},
			metros: {	
				type: 'float'
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
module.exports = AnoGravableModel