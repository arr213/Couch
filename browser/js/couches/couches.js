app.config(function ($stateProvider) {

    // Register our *couches* state.
    $stateProvider.state('couches', {
        url: '/couches',
        controller: 'CouchesController',
        templateUrl: 'js/couches/couches.html'
    });

});

app.controller('CouchesController', function ($scope, FullstackPics) {

    // Images of beautiful Fullstack people.
    $scope.images = _.shuffle(FullstackPics);

});
