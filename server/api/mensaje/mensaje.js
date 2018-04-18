import MJugador from './jugador.model';
import Api from '../api';
/**
 * API encargada de las tramas y metodos de consumo para la entidad jugador
 * @class Jugador
 */
class Jugador extends Api {
	/**
	 * Punto de entrada de la clase
	 * @memberof Jugador
	 */
	constructor() {
		//Llama al constructor de la clase API y guarda el mapa del router para modificaciònes posteriormente
		let _router = super(MJugador, '/jugador');
		this.router = _router;
	}
}

module.exports = Jugador;