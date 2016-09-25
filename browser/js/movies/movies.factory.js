'use strict'

app.factory('MoviesFactory', function($http){

	var MoviesFactory = {};

	function getData(response) {
		return response.data
	}

	MoviesFactory.getAll(){
		return $http.get('/api/movies')
		.then(getData);
	}

	MoviesFactory.getOne(id){
		return $http.get('api/movies/' +id)
		.then(getData);
	}

	return MoviesFactory;

})