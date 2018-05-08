import MJugador from './server/api/jugador/jugador.model';


let jugador = new MJugador();


jugador.findById();


this.dbEntity.findById('5adbe8456306a20e80324cf8')
			.then(entity => {
				
				console.log(entity);
			})
			.catch(err => res.send(err));