app.controller('CouchesController', function($scope) {
  console.log('couches controller!')

  $scope.couches = [{
    name: 'Roomies'
  }, {
    name: 'Family'
  }, {
    name: 'Fullstack Movie Night'
  }, {
    name: 'Netflix & Chill'
  }];

});
