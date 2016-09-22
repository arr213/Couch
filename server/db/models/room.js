'use strict';
var _ = require('lodash');
var Sequelize = require('sequelize');

module.exports = db.define('room', {
	name: {
		type: Sequelize.STRING,
		allowNull:false
	}
}