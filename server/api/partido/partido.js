import MPartido from './partido.model';
import Api from '../api';
/**
 * API encargada de las tramas y metodos de consumo para la entidad partido
 * @class Partido
 */
class Partido extends Api {
	/**
	 * Punto de entrada de la clase
	 * @memberof Partido
	 */
	constructor() {
		//Llama al constructor de la clase API y guarda el mapa del router para modificaciònes posteriormente
		let _router = super(MPartido, '/partido');
		this.router = _router;
	}
}

module.exports = Partido;