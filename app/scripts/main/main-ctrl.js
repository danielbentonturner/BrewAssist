'use strict';

angular.module('brewAssist')
  .controller('MainCtrl', function ($scope, $rootScope, $location, $firebase) {

    if ($rootScope.currentUser === undefined) {
      $location.path('/');
    }

    $scope.userModules = $rootScope.currentUser.userModules;

    // console.log('current user:', $rootScope.currentUser.uid);
    // console.log('data object:', $rootScope.data[$rootScope.currentUser.uid].userModules);

    $scope.removeModule = function (module) {
      var obj = {};
      obj[module] = false;
      var route = $scope.currentUser.uid + '/userModules';
      $rootScope.sync.$update(route, obj);
      $scope.userModules[module] = false;
    };

    $scope.switchModule = function (module) {
      var obj = {};
      obj[module] = $scope.userModules[module];
      var route = $scope.currentUser.uid + '/userModules';
      $rootScope.sync.$update(route, obj);
    };

    $scope.brewCalculators = {
      'ABV': {
          'key': 'ABV',
          'title': 'ABV - Alcohol by Volume',
          'description': 'Find the alcohol content by volume from the original gravity and final gravity.',
          formula: function (originalGravity, finalGravity) {
            var abv = ((76.08 * (originalGravity - finalGravity) / (1.775 - originalGravity)) * (finalGravity / 0.794));
            return abv;
          },
      'boilOff': {
          'key': 'boilOff',
          'title': 'Boil Off/Dilution Calculator',
          'description': 'Figure how much water to add or boil off to hit a specific gravity in a given volume of wort.',
          'formula': null
          },
      'bottleCarb': {
          'key': 'bottleCarb',
          'title': 'Bottle Priming Calculator',
          'description': 'Find the amount priming sugar needed to bring a given volume of beer to the correct CO2 volume when bottle conditioning.',
          'formula': null
          },
      'hopTimer': {
          'key': 'hopTimer',
          'title': 'Hop Addition Boil Timer',
          'description': 'Alert for each hop addition for a given boil time length.',
          'formula': null
          },
      'hydroTemp': {
          'key': 'hydroTemp',
          'title': 'Hydrometer Temperature',
          'description': 'Hydrometers are calibrated to a specific temperature. Find an accurate specific gravity based on liquid temp and your hydrometer calibration temp.',
          'formula': null
          },
      'IBUcalc': {
          'key': 'IBUcalc',
          'title': 'IBU Calculator for Bitterness',
          'description': 'Find the IBU value for your wort.',
          'formula': null
          },
      'kegCarb': {
          'key': 'kegCarb',
          'title': 'Kegging Carbonation Calculator',
          'description': 'Find the CO2 pressure required to bring a keg of beer to the correct CO2 volume.',
          'formula': null
          },
      'mashTemp': {
          'key': 'mashTemp',
          'title': 'Mash Temperature Calculator',
          'description': 'Find the needed strike water temp and volume for a given grain weight.',
          'formula': null
          },
      'refrac': {
          'key': 'refrac',
          'title': 'Refractometer Converter',
          'description': 'Convert the Brix reading on your refractometer to SG (specific gravity).',
          'formula': null
          },
      'spargeCalc': {
          'key': 'spargeCalc',
          'title': 'Sparge Volume Calculator',
          'description': 'Find the sparge volume for a given grain weight, desired wort volume, and desired gravity.',
          'formula': null
          },
      'SRMcalc': {
          'key': 'SRMcalc',
          'title': 'SRM/Color Calculator',
          'description': 'Find the SRM (Standard Reference Measure) color of your wort.',
          'formula': null
          },
      'pitchRate': {
          'key': 'pitchRate',
          'title': 'Yeast Starter Calculator',
          'description': 'Fnd the optimal pitch rate or yeast starter size for a given volume and specific gravity.',
          'formula': null
          }
    };

    // angular.forEach($scope.brewCalculators, function (brewCalculators) {
    //   brewCalculators.rank = Math.random();
    // });

    $scope.logout = function () {
      $rootScope.logout();
    };

  });
