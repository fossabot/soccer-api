import MJugador from './jugador.model';
import Api from '../api';
import express from 'express';
/**
 * API encargada de las tramas y metodos de consumo para la entidad jugador
 * @class Jugador
 */
class Jugador {
	/**
	 * Punto de entrada de la clase
	 * @memberof Jugador
	 */
	constructor() {
		this.path = '/jugador';
		//Binding async methods
		this.confirmEmail = this.confirmEmail.bind(this);
		this.sendMailConfirm = this.sendMailConfirm.bind(this);
		//Model
		this.Jugador = new MJugador();
		//Extends api 
		this.router = new Api(this.Jugador, this.path);
		//
		this.router.get(`${this.path}/confirmEmail/:id`, this.confirmEmail);
		this.router.get(`${this.path}/sendMailConfirm/:id`, this.sendMailConfirm);
		return this.router;
	}

	/*Por defecto la función de enviar correo estará como trigger */
	sendMailConfirm(req, res) {
		this.Jugador.findById(req.params.id)
			.then(jugador => {
				jugador.sendMailConfirm();
			})
			.catch(err => res.send(err));
		this.Jugador
	}

	confirmEmail(req, res) {
		//5adbe8456306a20e80324cf8
		//req.params.id
		this.Jugador.findById(req.params.id)
			.then(jugador => {
				if (!jugador) {
					res.send('No se ha encontrado ningun confirmación pendiente')
					return;
				}
				jugador.set({
					confirmado: true
				});
				jugador.save()
					.then(updatedJugador => {
						res.send('Correo confirmado satisfactoriamente');
					})
					.catch(err => res.send(err));
			})
			.catch(err => res.send(err));
	}
}

module.exports = Jugador;