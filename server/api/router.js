import Contribuyente from './contribuyente/contribuyente';
import ServerStatus from './serverStatus';
import Jugador from './jugador/jugador';

class Router {
	constructor(app = null) {
		
		this.app = app;
		this.app.use(new Jugador());
		this.app.use(new ServerStatus());
		return this.app.route;
	}
}

module.exports = Router;