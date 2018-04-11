import express from 'express';
import Ructor from '../ructor.js';
import CategoriaModel from './categoria.model';
import SRV_CONFIG from '../../../config/server.config.json'

//La ruta de consumo sería http://<ip|localhost>:<puerto>/categoria
class Categoria {
	constructor() {
		this.db = new Ructor('categoria');
		this.schema = new CategoriaModel();
		//
		this.get = this.get.bind(this);
		this.getById = this.getById.bind(this);
		this.post = this.post.bind(this);
		this.put = this.put.bind(this);
		this.patch = this.patch.bind(this);
		this.delete = this.delete.bind(this);
		this.schemaValidator = this.schemaValidator.bind(this);
		//
		this.router = express.Router();
		this.path = '/categoria';
		//categoria mapping
		this.router.use(this.path,this.schemaValidator);
		this.router.get(this.path, this.get);
		this.router.get(`${this.path}/:id`, this.getById);
		this.router.post(this.path, this.post);
		this.router.put(this.path, this.put);
		this.router.patch(this.path, this.patch);
		this.router.delete(this.path, this.delete);
		//
		return this.router;
	}

	schemaValidator(req, res, next) {

		let body = req.body;
		//Si tiene cuerpo 
		if (body) {
			this.schema.police(body) ? next() : res.send(SRV_CONFIG.ALERTAS.TRAMA_CORRUPTA);
		} else if (req.method === 'GET') {
			next();
		} else {
			//Si no es get y no tiene cuerpo 
			res.send(SRV_CONFIG.ALERTAS.TRAMA_CORRUPTA)
		}
	}
	//./funciona
	getById(req, res, next) {
		//req.params.id
		console.log(req.params)
		this.db.findBy(req.params.id).then((result) => {
			res.send(result.recordset);
		});
	}
	//./funciona
	get(req, res, next) {
		this.db.all().then((result) => {
			res.send(result.recordset);
		});
	}
	//./funciona
	post(req, res, next) {
		this.db.insert(req.body)
			.then((result) => {
				res.send(result.recordset);
			});
	}

	put(req, res, next) {
		this.db.update(this.jsonToString(req.body.val), this.jsonToString(req.body.where)).then((result) => {
			res.send(result.recordset);
		});
	}

	patch(req, res, next) {
		res.send('categoria patch');
	}

	delete(req, res, next) {
		res.send('categoria delete');
	}

}

module.exports = Categoria;