import ServerStatus from './serverStatus';
import Jugador from './jugador/jugador';
import Equipo from './equipo/equipo';
import Partido from './partido/partido';
import Resena from './resena/resena';

/**
 * Clase encargada de mapear los apis
 * @class Router
 */
class Router {
	constructor(app = null) {
		//Mapping general de los apis
		//Se adjuntan los apis al rest 
		this.app = app;
		this.app.use(new Jugador());
		this.app.use(new Equipo());
		this.app.use(new Partido());
		this.app.use(new Resena());
		this.app.use(new ServerStatus());
		return this.app.route;
	}
}

module.exports = Router;