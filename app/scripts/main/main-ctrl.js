'use strict';

angular.module('brewAssist')
  .controller('MainCtrl', function ($scope) {
    $scope.brewCalculators = [
      {
        'key': 'ABV',
        'title': 'ABV - Alcohol by Volume',
        'description': 'Find the alcohol content by volume from the original gravity and final gravity.',
        'formula': '((76.08*(originalGravity-finalGravity)/(1.775-originalGravity))*(finalGravity/0.794))',
        'selectedModule': false
      },
      {
        'key': 'hydroTemp',
        'title': 'Hydrometer Temperature',
        'description': 'Hydrometers are calibrated to a specific temperature. Find an accurate specific gravity based on liquid temp and your hydrometer calibration temp.',
        'formula': null,
        'selectedModule': false
      },
      {
        'key': 'IBUcalc',
        'title': 'IBU Calculator for Bitterness',
        'description': 'Find the IBU value for your wort.',
        'formula': null,
        'selectedModule': false
      },
      {
        'key': 'SRMcalc',
        'title': 'SRM/Color Calculator',
        'description': 'Find the SRM (Standard Reference Measure) color of your wort.',
        'formula': null,
        'selectedModule': false
      },
      {
        'key': 'boilOff',
        'title': 'Boil Off/Dilution Calculator',
        'description': 'Figure how much water to add or boil off to hit a specific gravity in a given volume of wort.',
        'formula': null,
        'selectedModule': false
      },
      {
        'key': 'pitchRate',
        'title': 'Yeast Starter Calculator',
        'description': 'Fnd the optimal pitch rate or yeast starter size for a given volume and specific gravity.',
        'formula': null,
        'selectedModule': false
      },
      {
        'key': 'refrac',
        'title': 'Refractometer Converter',
        'description': 'Convert the Brix reading on your refractometer to SG (specific gravity).',
        'formula': null,
        'selectedModule': true
      },
      {
        'key': 'mashTemp',
        'title': 'Mash Temperature Calculator',
        'description': 'Find the needed strike water temp and volume for a given grain weight.',
        'formula': null,
        'selectedModule': true
      },
      {
        'key': 'spargeCalc',
        'title': 'Sparge Volume Calculator',
        'description': 'Find the sparge volume for a given grain weight, desired wort volume, and desired gravity.',
        'formula': null,
        'selectedModule': true
      },
      {
        'key': 'kegCarb',
        'title': 'Kegging Carbonation Calculator',
        'description': 'Find the CO2 pressure required to bring a keg of beer to the correct CO2 volume.',
        'formula': null,
        'selectedModule': true
      },
      {
        'key': 'bottleCarb',
        'title': 'Bottle Priming Calculator',
        'description': 'Find the amount priming sugar needed to bring a given volume of beer to the correct CO2 volume when bottle conditioning.',
        'formula': null,
        'selectedModule': true
      },
      {
        'key': 'hopTimer',
        'title': 'Hop Addition Boil Timer',
        'description': 'Alert for each hop addition for a given boil time length.',
        'formula': null,
        'selectedModule': true
      }
    ];
    $scope.setViewableModules = function () {
      console.log('this happened');
    };
    angular.forEach($scope.brewCalculators, function (brewCalculators) {
      brewCalculators.rank = Math.random();
    });
  });
