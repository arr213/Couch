'use strict'

app.config(function($stateProvider){
	$stateProvider.state('movies', {
		url: 'movies',
		templateUrl: '/js/movies/movies.html',
		controller: 'MovieCtrl'
	})
})

app.controller('MoviesCtrl', function($scope, MoviesFactory, $log){


	MoviesFactory.getAll()
	.then(function(foundMovies){
		$scope.movies = foundMovies
		$scope.movieIndex = 0;
		$scope.currentMovie = $scope.movies[$scope.movieIndex];
	})
	.log(error)

	//send vote


	$scope.submit = function (value){


		//wrap in promise of vote post (add to factory) update
		//value is vote status 

		$scope.movieIndex++;
		$scope.currentMovie = $scope.movies[$scope.movieIndex]


	}

})