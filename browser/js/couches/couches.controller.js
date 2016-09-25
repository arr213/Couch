app.config(function ($stateProvider) {

    // Register our *couches* state.
    $stateProvider.state('couches', {
        url: '/couches',
        controller: 'CouchesController',
        templateUrl: 'js/couches/couches.html'
    });

});

app.controller('CouchesController', function ($scope) {

    // Images of beautiful Fullstack people.
    $scope.couches = [{name: 'Roomiez'}, {name: 'Date Night'}, {name: 'Fullstack Movie Night'}, {name: 'Netflix & Chill'}, {name: 'Friends4Lyfe'}];

});
