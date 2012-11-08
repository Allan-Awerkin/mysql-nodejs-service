// using db
var MeasureDB = require('./dal/measure.db.js');

// class constructor
function MeasureController() {
	this.db = new MeasureDB();
}

// public function
MeasureController.prototype.findAll = function (callback){
	this.db.findAll(function (err, results) {
		if (callback) {
			callback(err, results);
		}
	});
};

module.exports = MeasureController;