'use strict'

app.config(function($stateProvider){
	 $stateProvider.state('movies', {
        url: '/movies',
        controller: 'MoviesCtrl',
        templateUrl: 'js/movies/movies.html'
    });

});

app.controller('MoviesCtrl', function($scope, MoviesFactory, $log, $state){

	MoviesFactory.getAll()
	.then(function(foundMovies){
		console.log(foundMovies);
		$scope.movies = foundMovies
		$scope.movieIndex = 0;
		$scope.currentMovie = $scope.movies[$scope.movieIndex];
		console.log($scope.currentMovie);
	})
	.catch($log.error);



	$scope.submit = function (value){


		$scope.movieIndex++;
		if($scope.movies[$scope.movieIndex]){
			$scope.currentMovie = $scope.movies[$scope.movieIndex]
		} else {
			console.log("done");
			//$state.go('');
		}


	}

});