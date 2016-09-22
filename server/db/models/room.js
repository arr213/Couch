'use strict';
var _ = require('lodash');
var Sequelize = require('sequelize');
var db = require('../_db');

module.exports = db.define('room', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	}
});
