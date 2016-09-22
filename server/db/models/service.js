'use strict';
var _ = require('lodash');
var Sequelize = require('sequelize');

module.exports = db.define('service', {
	name: {
		type: Sequelize.STRING,
		allowNull:false
	},
	gbid: {
		type: Sequelize.STRING
	}
}

