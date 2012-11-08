var MeasureController = require('../controllers/measure.controller.js');

exports.CreateMeasureRoutes = function () {

	var measureController = new MeasureController();

	return {
		findAll: function(req, res, next) {
			measureController.findAll(function (err, measures) {
				console.log('found measures');
			});
		}

	};
};