import Contribuyente from './contribuyente/contribuyente';
import ServerStatus from './serverStatus'

class Router {
	constructor(app = null) {
		
		this.app = app;
		this.app.use(new Contribuyente());
		this.app.use(new ServerStatus());
		return this.app.route;
	}
}

module.exports = Router;