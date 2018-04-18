import MEquipo from './equipo.model';
import Api from '../api';
/**
 * API encargada de las tramas y metodos de consumo para la entidad equipo
 * @class Equipo
 */
class Equipo extends Api {
	/**
	 * Punto de entrada de la clase
	 * @memberof Equipo
	 */
	constructor() {
		//Llama al constructor de la clase API y guarda el mapa del router para modificaciònes posteriormente
		let _router = super(MEquipo, '/equipo');
		this.router = _router;
	}
}

module.exports = Equipo;