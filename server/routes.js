var utils = require('./routes/_utils');

module.exports  = function(app) {
	/*
	Catch the rest
	 */
	app.get('*', utils.notFound);
	app.put('*', utils.notFound);
	app.post('*', utils.notFound);
	app.delete('*', utils.notFound);

};