var mongoose = require('mongoose');

module.exports = function () {
	var schema = mongoose.Schema({
		login: {
			type: String
		},
		email: {
			type: String
		},
		senha: {
			type: String
		}
	});
	
	mongoose.set('debug', true)
	return mongoose.model('Usuario', schema);
}