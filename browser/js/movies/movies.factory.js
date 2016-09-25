'use strict'

app.factory('MoviesFactory', function($http){

	var MoviesFactory = {};

	function getData(response) {
		return response.data
	}

	MoviesFactory.getAll = function(){
		return $http.get('/api/movies')
		.then(getData);
	}

	MoviesFactory.getOne = function(id){
		return $http.get('api/movies/' +id)
		.then(getData);
	}

	MoviesFactory.createVote = function(data){
		return $http.post('api/vote', data)
		.then(getData)
	}

	return MoviesFactory;



})