'use strict';
var db = require('./_db');
module.exports = db;

// eslint-disable-next-line no-unused-vars
//Brings in all independent models
var User = require('./models/user');
var Room = require('./models/room');
var Service = require('./models/service');
var Movie = require('./models/movie');
var Vote = require('./models/vote');


// Makes all associations
Room.belongsToMany(User, { through: 'room_user' });
User.belongsToMany(Room, { through: 'room_user' });

Room.belongsToMany(Service, { through: 'room_service' });
Service.belongsToMany(Room, { through: 'room_service' });

User.belongsToMany(Service, { through: 'room_service' });
Service.belongsToMany(User, { through: 'room_service' });

Vote.belongsTo(Room);
Room.hasMany(Vote);

Vote.belongsTo(User);
User.hasMany(Vote);

Vote.belongsTo(Movie);
Movie.hasMany(Vote);
