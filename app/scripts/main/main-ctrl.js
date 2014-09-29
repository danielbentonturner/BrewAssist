'use strict';

angular.module('brewAssist')
  .controller('MainCtrl', function ($scope, $rootScope, $location) {

    if ($rootScope.currentUser === undefined) {
      $location.path('/');
    }
    
    $scope.userModules = $rootScope.currentUser.userModules;

    // console.log('current user:', $rootScope.currentUser.uid);
    // console.log('data object:', $rootScope.data[$rootScope.currentUser.uid].userModules);

    $rootScope.removeModule = function (module) {
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

    $rootScope.brewCalculators = {
        'ABV': {
          'key': 'ABV',
          'title': 'ABV - Alcohol by Volume',
          'description': 'Find the alcohol content by volume from the Original Gravity and Final Gravity.',
          'controller': 'ABVCtrl',
          'template':  {name: 'abv.html', url: 'partials/abv.html'}
        },
        'boilOff': {
          'key': 'boilOff',
          'title': 'Boil Off',
          'description': 'Figure how much water to boil off to hit a Specific Gravity in a given volume of wort.',
          'controller': 'boilOffCtrl',
          'template':  {name: 'boilOff.html', url: 'partials/boilOff.html'}
        },
        // 'bottleCarb': {
        //   'key': 'bottleCarb',
        //   'title': 'Bottle Priming Calculator',
        //   'description': 'Find the amount priming sugar needed to bring a given volume of beer to the correct CO2 volume when bottle conditioning.',
        //   'controller': 'bottleCarbCtrl',
        //   'template':  {name: 'bottleCarb.html', url: 'partials/bottleCarb.html'}
        // },
        'dilute': {
          'key': 'dilute',
          'title': 'Dilution Calculator',
          'description': 'Figure how much water to add to hit a Specific Gravity in a given volume of wort.',
          'controller': 'diluteCtrl',
          'template':  {name: 'dilute.html', url: 'partials/dilute.html'}
        },
        // 'hopTimer': {
        //   'key': 'hopTimer',
        //   'title': 'Hop Addition Boil Timer',
        //   'description': 'Alert for each hop addition for a given boil time length.',
        //   'controller': 'hopTimerCtrl',
        //   'template':  {name: 'hopTimer.html', url: 'partials/hopTimer.html'}
        // },
        'hydroTemp': {
          'key': 'hydroTemp',
          'title': 'Hydrometer Temperature',
          'description': 'Hydrometers are calibrated to a Specific temperature. Find an accurate Specific Gravity based on liquid temperature, the temperature for which your hydrometer was calibrated, and the measured Specific Gravity (SG) of your wort.',
          'controller': 'hydroTempCtrl',
          'template':  {name: 'hydroTemp.html', url: 'partials/hydroTemp.html'}
        },
        // 'IBUcalc': {
        //   'key': 'IBUcalc',
        //   'title': 'IBU Calculator for Bitterness',
        //   'description': 'Find the IBU value for your wort.',
        //   'controller': 'IBUcalcCtrl',
        //   'template':  {name: 'IBUcalc.html', url: 'partials/IBUcalc.html'}
        // },
        // 'kegCarb': {
        //   'key': 'kegCarb',
        //   'title': 'Kegging Carbonation Calculator',
        //   'description': 'Find the CO2 pressure required to bring a keg of beer to the correct CO2 volume.',
        //   'controller': 'kegCarbCtrl',
        //   'template':  {name: 'kegCarb.html', url: 'partials/kegCarb.html'}
        // },
        // 'mashTemp': {
        //   'key': 'mashTemp',
        //   'title': 'Mash Temperature Calculator',
        //   'description': 'Find the needed strike water temp and volume for a given grain weight.',
        //   'controller': 'mashTempCtrl',
        //   'template':  {name: 'mashTemp.html', url: 'partials/mashTemp.html'}
        // },
        // 'pitchRate': {
        //   'key': 'pitchRate',
        //   'title': 'Yeast Starter Calculator',
        //   'description': 'Fnd the optimal pitch rate or yeast starter size for a given volume and Specific Gravity.',
        //   'controller': 'pitchRateCtrl',
        //   'template':  {name: 'pitchRate.html', url: 'partials/pitchRate.html'}
        // },
        'refrac': {
          'key': 'refrac',
          'title': 'Refractometer Converter',
          'description': 'Convert the Brix reading on your refractometer to Specific Gravity.',
          'controller': 'refracCtrl',
          'template':  {name: 'refrac.html', url: 'partials/refrac.html'}
        }
        // 'spargeCalc': {
        //   'key': 'spargeCalc',
        //   'title': 'Sparge Volume Calculator',
        //   'description': 'Find the sparge volume for a given grain weight, desired wort volume, and desired Gravity.',
        //   'controller': 'spargeCalcCtrl',
        //   'template':  {name: 'spargeCalc.html', url: 'partials/spargeCalc.html'}
        // },
        // 'SRMcalc': {
        //   'key': 'SRMcalc',
        //   'title': 'SRM/Color Calculator',
        //   'description': 'Find the SRM (Standard Reference Measure) color of your wort.',
        //   'controller': 'SRMcalcCtrl',
        //   'template':  {name: 'SRMcalc.html', url: 'partials/SRMcalc.html'}
        // }
      };

    // angular.forEach($scope.brewCalculators, function (brewCalculators) {
    //   brewCalculators.rank = Math.random();
    // });

    // $scope.logout = function () {
    //   $rootScope.logout();
    // };
  });
