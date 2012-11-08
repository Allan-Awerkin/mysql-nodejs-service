var mysql = require('mysql');

// constructor
function MeasureDB() {
	this.connection = mysql.createConnection({
		host: 'localhost',
		port: 3306,
		database: 'cloud',
		user: 'root'
	});
}

// public function
MeasureDB.prototype.findAll = function (callback){
	this.connection.query('SELECT *', function (err, result) {
		console.log('query');
		callback();
	});
};

module.exports = MeasureDB;