var connection = require("./connection.js");

function questionMarks (num){
	var array = [];

	for (var i=0; i < num; i++){
		array.push("?");
	}

	return array.toString();
}

function objToSql(object){
	var array = [];

	for (var key in object) {
		array.push(key + "=" + object[key]);
	}

	return array.toString();
}

var orm = {
	selectAll: function(smoothieOptions, callback) {
		var queryString = "SELECT * FROM " + smoothieOptions + ";";
		connection.query(queryString, function(err, result){
			if (err) {
				throw err;
			}
			callback(result);
		}); 
	},
	insertOne: function(smoothieOptions, cols, vals, callback) {
		var queryString = "INSERT INTO " + smoothieOptions;

		queryString += " (";
		queryString += cols.toString();
		queryString += ") ";
		queryString += "VALUES (";
		queryString += questionMarks(vals.length);
		queryString += ") ";

		console.log(queryString);

		connection.query(queryString, vals, function(err, result){
			if (err) {
				throw err;
			}
			callback(result);
		});
	},
	updateOne: function(smoothieOptions, objColVals, condition, callback) {
		var queryString = 'UPDATE ' + smoothieOptions + " SET " + objToSql(objColVals) + " WHERE " + condition;

		console.log(queryString);
		connection.query(queryString, function(err,result){
			if (err) {
				throw err;
			}
			callback(result);
		});
	}
};

module.exports = orm;	