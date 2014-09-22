'use strict';

angular.module('brewAssist')
  .controller('fire-ctrl', ['$scope', '$firebase',
    function ($scope, $firebase) {
      var ref = new Firebase('https://brewassist.firebaseio.com/');
      // create an AngularFire reference to the data
      var sync = $firebase(ref);
      // download the data into a local object
      $scope.data = sync.$asObject();
      var authClient = new FirebaseSimpleLogin(ref, function (error, user) {
        if (error) {
          // an error occurred while attempting login
          console.log(error);
        } else if (user) {
          // user authenticated with Firebase
          console.log('User ID: ' + user.uid + ', Provider: ' + user.provider);
        } else {
          // user is logged out
        }
      });
      var authRef = new Firebase('https://brewassist.firebaseio.com/.info/authenticated');
      authRef.on('value', function (snap) {
        if (snap.val() === true) {
          alert('authenticated');
        } else {
          alert('not authenticated');
        }
      });
    }
  ]);