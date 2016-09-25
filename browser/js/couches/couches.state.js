'use-strict'

app.config(function ($stateProvider) {

    // Register our *couches* state.
    $stateProvider.state('couches', {
        url: '/couches',
        controller: 'CouchesController',
        templateUrl: 'js/couches/couches.html'
    });

});
