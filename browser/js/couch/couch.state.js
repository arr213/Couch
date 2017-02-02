'use strict'

app.config(function($stateProvider){
	$stateProvider.state('couch', {
		url: '/couch',
		templateUrl: '/js/couch/couch.html',
		controller: 'CouchCtrl'
	})
});

