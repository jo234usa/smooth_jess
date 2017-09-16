var orm = require("../config/orm.js");

var smoothies = {
	selectAll: function(callback){
		orm.selectAll("smoothieOptions", function(res){
			callback(res);
		});
	},
	insertOne: function(name, callback){
		orm.insertOne("smoothieOptions", [
			"smoothie", "devoured"
		], [
			name, false
		], callback);
	},
	updateOne: function(id, callback){
		var condition = "id=" + id;
		orm.updateOne("smoothieOptions", {
			devoured: true
		}, condition, callback);
	}
};

module.exports = smoothies;