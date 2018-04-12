import Connection from '../db.connection';
/**
 * Esta clase contiene el crud global, todas las apis se deben conectar acá para realizar 
 * cualquier tipo de sentencia SQL 
 */
class Ructor {

	constructor(table) {
		this.db = new Connection();
		this.table = table;
	}

	execute(sentence) {
		return this.db().then(pool => {
			return pool
				.request()
				.query(sentence)
				.then((result) => {
					connection.close();
					return result;
				});
		});
	}
	//@
	requestToSentence(request) {
		let sentence = [];
		for (let key in request) {
			sentence.push(`'${request[key]}'`);
		}
		return "(" + sentence.join(',') + ")";
	}
	getColumns(request) {
		let sentence = [];
		for (let key in request) {
			sentence.push(`${key}`);
		}
		return "(" + sentence.join(',') + ")";
	}

	//@CRUD
	//GET
	all(table = this.table) {
		let sentence = `select * from ${table}`;
		return this.execute(sentence);
	}
	//GET :id
	findBy(where, val = '*', table = this.table) {
		where = !isNaN(where) ? `id_${table} = ${where}` : where;
		let sentence = `select ${val} from ${table} where ${where}`;
		return this.execute(sentence);
	}
	// POST
	insert(val, table = this.table, custom = '') {
		let value = this.requestToSentence(val);
		let columns = this.getColumns(val);
		let sentence = `declare @t table (id_${table} int) insert into ${table} ${columns} Output inserted.id_${table} into @t values (${value}) select * from @t `;
		return this.execute(sentence);
	}
	// PUT PATCH
	update(val, where, table = this.table) {
		let sentence = `update ${table} set ${val} where ${where}`;
		return this.execute(sentence);
	}
	//DELETE 
	delete(table = this.table, where) {
		let sentence = `delete ${table} where ${where}`;
		return this.con(sentence, false);
	}


}
module.exports = Ructor;