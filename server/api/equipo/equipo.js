import MEquipo from './equipo.model';
import Api from '../api';
/**
 * API encargada de las tramas y metodos de consumo para la entidad equipo
 * @class Equipo
 */
class Equipo {
	/**
	 * Punto de entrada de la clase
	 * @memberof Equipo
	 */
	constructor() {
		//Llama al constructor de la clase API y guarda el mapa del router para modificaciònes posteriormente
		let path = '/equipo';
		this.Equipo = new MEquipo();
		this.router = new Api(this.Equipo, path);
		//this.getJugadores = this.getJugadores.bind(this);
		//this.router.get(`${path}/getJugadores/:id`, this.getJugadores);
		return this.router;
	}

	/*getJugadores(req, res) {
		if (!req.params.id)
			res.status(500).send('Es necesario proveer un id en los parametros')
		this.Equipo.findById(req.params.id)[][]
			.populate('integrantes')
			.populate('lider')
			.then(response => {
				res.send(response)
			})
			.catch(error => {
				res.status(500).send(error);
			})
	}*/
}

module.exports = Equipo;