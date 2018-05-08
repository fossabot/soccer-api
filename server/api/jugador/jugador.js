import MJugador from './jugador.model';
import Api from '../api';
import express from 'express';
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
		let path = '/jugador';
		//Llama al constructor de la clase API y guarda el mapa del router para modificaciònes posteriormente
		super(MJugador, path);
		//this.router = _router;
		//this.router.get(`${path}/confirmEmail/:id`, this.confirmEmail);
		this.fn();
		//this.confirmEmail = this.confirmEmail.bind(this)();
		//this.router = express.Router();
		//this.router.get(`${path}/confirmEmail/:id`, this.confirmEmail);
	}
	fn(ba){
		console.log(ba);
	}

	confirmEmail (req, res){
		//5adbe8456306a20e80324cf8
		res.send('Ok')
		
		//req.params.id
		/*this.dbEntity.findById(req.params.id)
			.then(entity => {
				if(!entity) {
					res.send('No se ha encontrado ningun confirmación pendiente')
					return;
				}
				entity.set({confirmado: true});
				entity.save()
					.then(updatedEntity => {
						res.send(updatedEntity);
					})
					.catch(err => res.send(err))
			})
			.catch(err => res.send(err));*/

	}
}

module.exports = Jugador;