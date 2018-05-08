import MResena from './resena.model';
import Api from '../api';
/**
 * API encargada de las tramas y metodos de consumo para la entidad partido
 * @class Resena
 */
class Resena extends Api {
	/**
	 * Punto de entrada de la clase
	 * @memberof Resena
	 */
	constructor() {
		//Llama al constructor de la clase API y guarda el mapa del router para modificaciònes posteriormente
		let _router = super(new MResena(), '/resena');
		this.router = _router;
	}
}

module.exports = Resena;