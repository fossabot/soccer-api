/*import MJugador from './server/api/jugador/jugador.model';


let jugador = new MJugador();


jugador.findById();


this.dbEntity.findById('5adbe8456306a20e80324cf8')
			.then(entity => {
				
				console.log(entity);
			})
			.catch(err => res.send(err));*/

class Xe {
	constructor(some){
		console.log(some);
	}
}


class Za extends Xe {
	constructor(){
		super('mir');

		this.me();
	}

	me (){
		console.log('me:!')
	}
}


new Za();



