'use strict';
var mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema({
	productID: {
		type: mongoose.Schema.Types.ObjectId, ref: 'Product'
	},
	userID: {
		type: mongoose.Schema.Types.ObjectId, ref: 'User'
	},
	review: {
		type: String
	},
	stars: {
		type: Number,
		min: 1,
		max: 5 
	}
});

var Review = mongoose.model('Review', reviewSchema);

module.exports = {"Review": Review};
