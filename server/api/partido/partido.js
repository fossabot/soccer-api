import MPartido from './partido.model';
import Api from '../api';
/**
 * API encargada de las tramas y metodos de consumo para la entidad partido
 * @class Partido
 */
class Partido {
	/**
	 * Punto de entrada de la clase
	 * @memberof Partido
	 */
	constructor() {
		return new Api(new MPartido(), '/partido');
	}
}

module.exports = Partido;