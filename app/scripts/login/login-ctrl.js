'use strict';

angular.module('brewAssist')
  .controller('LoginCtrl', function ($scope, $rootScope, $firebase, $firebaseSimpleLogin, $location, $timeout) {

    // Authenticate the current user session
    $scope.ref = new Firebase('https://brewassist.firebaseio.com/');
    $scope.auth = new FirebaseSimpleLogin($scope.ref, function (error, user) {
      $timeout(function () {
        if (error) {
          // an error occurred while attempting login
          console.log(error);
          $scope.invalidPassword = true;
        } else if (user) {
          // user authenticated with Firebase
          // create an AngularFire reference to the data
          $rootScope.sync = $firebase($scope.ref);
          // download the data into a local object
          $rootScope.data = $rootScope.sync.$asObject();
          // wait until data has fully loaded, then find currect user data
          $rootScope.data.$loaded().then(function () {
            $rootScope.currentUser = $scope.data[user.uid];
            $location.path('/main');
          });
        } else {
          // user is logged out
        }
      });
    });

    // Create a new user session by logging in
    $scope.login = function (userEmail, userPassword) {
      $scope.auth.login('password', {
        email: userEmail,
        password: userPassword
      });
    };

    // Register a SimpleLogin user object along with a companion data object in Firebase
    $scope.register = function (email, password) {
      $scope.auth.createUser(email, password, function (error, user) {
        if (error === null) {
          $timeout(function () {
            console.log('User created successfully:', user);
            $scope.successfulRegistration = true;
            $scope.ref.child(user.uid).set({
              id: user.id,
              uid: user.uid,
              email: user.email,
              userModules: {
                'ABV': true
              }
            });
          });
        } else {
          console.log('Error creating user:', error);
        }
      });
    };

    // Log the user out and kill the session
    $rootScope.logout = function () {
      $scope.auth.logout();
      $location.path('/');
    };

  });