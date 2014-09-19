'use strict';

angular.module('brewAssist')
  .controller('MainCtrl', function ($scope) {
    $scope.brewCalculators = [
      {
        'key': 'ABV',
        'title': 'ABV - Alcohol by Volume',
        'description': 'Find the alcohol content by volume from the original gravity and final gravity.',
        'code': null
      },
      {
        'key': 'hydroTemp',
        'title': 'Hydrometer Temperature',
        'description': 'Hydrometers are calibrated to a specific temperature. Find an accurate specific gravity based on liquid temp and your hydrometer calibration temp.',
        'code': null
      },
      {
        'key': 'IBUcalc',
        'title': 'IBU Calculator for Bitterness',
        'description': 'Find the IBU value for your wort.',
        'code': null
      },
      {
        'key': 'SRMcalc',
        'title': 'SRM/Color Calculator',
        'description': 'Find the SRM (Standard Reference Measure) color of your wort.',
        'code': null
      },
      {
        'key': 'boilOff',
        'title': 'Boil Off/Dilution Calculator',
        'description': 'Figure how much water to add or boil off to hit a specific gravity in a given volume of wort.',
        'code': null
      },
      {
        'key': 'pitchRate',
        'title': 'Yeast Starter Calculator',
        'description': 'Fnd the optimal pitch rate or yeast starter size for a given volume and specific gravity.',
        'code': null
      },
      {
        'key': 'refrac',
        'title': 'Refractometer Converter',
        'description': 'Convert the Brix reading on your refractometer to SG (specific gravity).',
        'code': null
      },
      {
        'key': 'mashTemp',
        'title': 'Mash Temperature Calculator',
        'description': 'Find the needed strike water temp and volume for a given grain weight.',
        'code': null
      },
      {
        'key': 'spargeCalc',
        'title': 'Sparge Volume Calculator',
        'description': 'Find the sparge volume for a given grain weight, desired wort volume, and desired gravity.',
        'code': null
      },
      {
        'key': 'kegCarb',
        'title': 'Kegging Carbonation Calculator',
        'description': 'Find the CO2 pressure required to bring a keg of beer to the correct CO2 volume.',
        'code': null
      },
      {
        'key': 'bottleCarb',
        'title': 'Bottle Priming Calculator',
        'description': 'Find the amount priming sugar needed to bring a given volume of beer to the correct CO2 volume when bottle conditioning.',
        'code': null
      },
      {
        'key': 'hopTimer',
        'title': 'Hop Addition Boil Timer',
        'description': 'Alert for each hop addition for a given boil time length.',
        'code': null
      }
    ];
    angular.forEach($scope.brewCalculators, function (brewCalculators) {
      brewCalculators.rank = Math.random();
    });
  });
