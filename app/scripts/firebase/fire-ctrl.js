'use strict';

angular.module('brewAssist')
  .controller('FireCtrl', function ($scope, $firebase) {
    var ref = new Firebase('https://brewassist.firebaseio.com/');
    // create an AngularFire reference to the data
    var sync = $firebase(ref);
    // download the data into a local object
    $scope.data = sync.$asObject();
  });