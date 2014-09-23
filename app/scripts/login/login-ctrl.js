'use strict';

angular.module('brewAssist')
  .controller('LoginCtrl', function ($scope, $firebase, $firebaseSimpleLogin) {
    $scope.ref = new Firebase('https://brewassist.firebaseio.com/');
    $scope.auth = new FirebaseSimpleLogin($scope.ref, function (error, user) {
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

    $scope.login = function (userEmail, userPassword) {
      $scope.auth.login('password', {
        email: userEmail,
        password: userPassword
      });
    };

    $scope.register = function (email, password) {
      $scope.auth.createUser(email, password, function (error, user) {
        if (error === null) {
          console.log("User created successfully:", user);
          $scope.ref.child(user.uid).set({
            id: user.id,
            uid: user.uid,
            email: user.email,
            userModules: {
              'ABV': false,
              'hydroTemp': false,
              'IBUcalc': false,
              'SRMcalc': false,
              'boilOff': false,
              'pitchRate': false,
              'refrac': true,
              'mashTemp': true,
              'spargeCalc': true,
              'kegCarb': true,
              'bottleCarb': true,
              'hopTimer': true
            }
          });
        } else {
          console.log("Error creating user:", error);
        }
      });
    };

    // var authRef = new Firebase('https://brewassist.firebaseio.com/.info/authenticated');
    // authRef.on('value', function (snap) {
    //   if (snap.val() === true) {
    //     alert('authenticated');
    //   } else {
    //     alert('not authenticated');
    //   }
    // });
  });