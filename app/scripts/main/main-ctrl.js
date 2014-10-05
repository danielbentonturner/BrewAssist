'use strict';

angular.module('brewAssist')
  .controller('MainCtrl', function ($scope, $rootScope, $location) {

    if ($rootScope.currentUser === undefined) {
      $location.path('/');
    }
    
    $scope.userModules = $rootScope.currentUser.userModules;

    // Hides the module from the main view
    $rootScope.removeModule = function (module) {
      var obj = {};
      obj[module] = false;
      var route = $scope.currentUser.uid + '/userModules';
      $rootScope.sync.$update(route, obj);
      $scope.userModules[module] = false;
    };

    // Used in the moduels view, allows modules to be hidden or shown in the main view 
    $scope.switchModule = function (module) {
      var obj = {};
      obj[module] = $scope.userModules[module];
      var route = $scope.currentUser.uid + '/userModules';
      $rootScope.sync.$update(route, obj);
    };

    // ng-repeat is used with this object to display each module. Individual modules are loaded via 
    // html partials with their own contoller. Modules are shown or hidden by checking the user 
    // database object and looking at the boolean for each module.
    $rootScope.brewCalculators = {
        'ABV': {
          'key': 'ABV',
          'title': 'ABV - Alcohol By Volume',
          'description': 'Find the alcohol content by volume from the Original Gravity and Final Gravity.',
          'controller': 'ABVCtrl',
          'template':  {name: 'abv.html', url: 'partials/abv.html'}
        },
        'boilOffGrav': {
          'key': 'boilOffGrav',
          'title': 'Boil Off/Dilution Gravity Calculator',
          'description': 'Find the new Specific Gravity when increasing or decreasing the volume of wort.',
          'controller': 'boilOffGravCtrl',
          'template':  {name: 'boilOffGrav.html', url: 'partials/boilOffGrav.html'}
        },
        // 'bottleCarb': {
        //   'key': 'bottleCarb',
        //   'title': 'Bottle Priming Calculator',
        //   'description': 'Find the amount priming sugar needed to bring a given volume of beer to the correct CO2 volume when bottle conditioning.',
        //   'controller': 'bottleCarbCtrl',
        //   'template':  {name: 'bottleCarb.html', url: 'partials/bottleCarb.html'}
        // },
        'boilOffVol': {
          'key': 'boilOffVol',
          'title': 'Boil Off/Dilution Volume Calculator',
          'description': 'Find how much water to add or boil off for the volume of wort to reach a required Specific Gravity.',
          'controller': 'boilOffVolCtrl',
          'template':  {name: 'boilOffVol.html', url: 'partials/boilOffVol.html'}
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
        'mashWater': {
          'key': 'mashWater',
          'title': 'Mash Infusion Calculator',
          'description': 'Find the needed water volume (at a given temperature) to bring your mash to a specific temperature.',
          'controller': 'mashWaterCtrl',
          'template':  {name: 'mashWater.html', url: 'partials/mashWater.html'}
        },
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
        },
        'strikeTemp': {
          'key': 'strikeTemp',
          'title': 'Initial Mash Strike Water Calculator',
          'description': 'Find the needed strike water temperature for a given water/grain ratio to reach the desired temperature of the initial mash infusion.',
          'controller': 'strikeTempCtrl',
          'template':  {name: 'strikeTemp.html', url: 'partials/strikeTemp.html'}
        }
        // 'SRMcalc': {
        //   'key': 'SRMcalc',
        //   'title': 'SRM/Color Calculator',
        //   'description': 'Find the SRM (Standard Reference Measure) color of your wort.',
        //   'controller': 'SRMcalcCtrl',
        //   'template':  {name: 'SRMcalc.html', url: 'partials/SRMcalc.html'}
        // }
      };
  });
