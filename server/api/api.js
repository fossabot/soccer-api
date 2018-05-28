import express from 'express';
import SRV_CONFIG from '../../config/server.config.json'

/**
 * 
 * Clase experta en informaciòn, cada api creada deberá heredar de esta
 * @singleton Api
 */
class Api {
	/**
	 * Creates an instance of Api.
	 * @param {any} Entity 
	 * @param {any} pathApi 
	 * @memberof Api
	 */
	constructor(Entity, pathApi) {
		//Instancia a la base de datos para la entidad jugador, solo se hace una vez	
		this.dbEntity = Entity;
		//Se hace binding a funciones asincronas para que puedan manipular this
		this.get = this.get.bind(this);
		this.getById = this.getById.bind(this);
		this.post = this.post.bind(this);
		this.put = this.put.bind(this);
		this.search = this.search.bind(this);
		this.delete = this.delete.bind(this);
		this.populate = this.populate.bind(this);
		this.schemaValidator = this.schemaValidator.bind(this);
		//Instancia de ruteador(Creador de apis)
		this.router = express.Router();
		//Path de consumo
		this.path = pathApi;
		//Primer middleware, evalua si la trama que se envia es correcta
		this.router.use(this.path, this.schemaValidator);
		//Mapa de ruteo
		this.router.get(this.path, this.get);
		this.router.post(this.path, this.post);
		this.router.get(`${this.path}/:id`, this.getById);
		this.router.post(`${this.path}/search`, this.search);
		this.router.put(`${this.path}/:id`, this.put);
		this.router.delete(`${this.path}/:id`, this.delete);
		this.router.post(`${this.path}/populate/:id`, this.populate);
		return this.router;
	}

	/**
	 * 
	 * Valida el esquema 
	 * @param {any} req => trama recibida 
	 * @param {any} res => respuesta a enviar 
	 * @param {any} next 
	 * @memberof Api
	 */
	schemaValidator(req, res, next) {
		let body = req.body;
		//Si tiene cuerpo quiere decir que no es GET
		if (body) {
			//Valida si la trama enviada es correcta
			let valid = new this.dbEntity().police(body)
			valid ?
				next() :
				res.send(SRV_CONFIG.ALERTAS.TRAMA_CORRUPTA);
		} else if (req.method === 'GET') {
			//Continue con la ejecuciòn segùn el metodo de consumo
			next();
		} else {
			//Si no es get y no tiene cuerpo devuelve trama corrupta
			res.send(SRV_CONFIG.ALERTAS.TRAMA_CORRUPTA)
		}
	}
	/**
	 * 
	 * Obtiene la entidad segùn el ID del mismo
	 * @param {any} req => trama recibida
	 * @param {any} res => respuesta a enviar 
	 * @param {any} next => ejecuta el siguiente middleware
	 * @memberof Api
	 */
	getById(req, res, next) {
		this.dbEntity.findById(req.params.id)
			.then((data) => res.send(data))
			.catch((err) => res.end(err));
	}
	/**
	 * 
	 * Obtiene todos los registros de la entidad maximo: 500
	 * @param {any} req => trama recibida
	 * @param {any} res => respuesta a enviar 
	 * @param {any} next => ejecuta el siguiente middleware
	 * @memberof Api
	 */
	get(req, res, next) {
		this.dbEntity.find()
			.then((data) => res.send(data))
			.catch((err) => res.end(err));
	}
	/**
	 * 
	 * Obtiene los registros que coincidan con los parametros de busqueda
	 * @param {any} req => trama recibida
	 * @param {any} res => respuesta a enviar 
	 * @param {any} next => ejecuta el siguiente middleware
	 * @memberof Api
	 */
	search(req, res, next) {
		this.dbEntity.find(req.body)
			.then((data) => res.send(data))
			.catch((err) => res.end(err));
	}
	/**
	 * Inserta un registro segùn la entidad instanciada
	 * @param {any} req => trama recibida
	 * @param {any} res => respuesta a enviar 
	 * @param {any} next => ejecuta el siguiente middleware
	 * @memberof Api
	 */
	post(req, res, next) {
		let entity = new this.dbEntity(req.body);
		entity.save()
			.then((data) => res.send(data))
			.catch((err) => res.send(err));
	}
	/**
	 * 
	 * Actualiza los campos enviados en la trama segùn el id de la entidad enviada en la url
	 * @param {any} req => trama recibida
	 * @param {any} res => respuesta a enviar 
	 * @param {any} next => ejecuta el siguiente middleware
	 * @memberof Api
	 */
	put(req, res, next) {
		this.dbEntity.findById(req.params.id)
			.then(entity => {
				entity.set(req.body);
				entity.save()
					.then(updatedEntity => {
						res.send(updatedEntity);
					})
					.catch(err => res.send(err))
			})
			.catch(err => res.send(err));
	}


	populate(req, res) {
		if (!req.params.id)
			res.status(500).send('Es necesario proveer un id en los parametrosde la url');
		if (!req.body.populate.length)
			res.status(500).send('Es necesario proveer al menos un valor para hacer populate');
		let query = this.dbEntity.findById(req.params.id)

		req.body.populate.forEach(join => query.populate(join));
		query.then(response => {
				res.send(response)
			})
			.catch(error => {
				res.status(500).send(error);
			})
	}

	/**
	 * 
	 * 
	 * @param {any} req 
	 * @param {any} res 
	 * @param {any} next 
	 * @memberof Api
	 */
	delete(req, res, next) {
		this.dbEntity.findById(req.params.id)
			.then(entity => {
				entity.remove()
					.then(removedEntity => {
						res.send(removedEntity);
					})
					.catch(err => res.send(err))
			})
			.catch(err => res.send(err));
	}
}

module.exports = Api;