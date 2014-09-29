'use strict';

angular.module('brewAssist')
  // .directive('beerCalc', function () {
  //   return {
  //     restrict: 'E',
  //     templateUrl: 'partials/abv.html',
  //     link: function (scope,parent,) {
  //       console.log('directive!');
  //       scope.hi = 'hello';
  //       scope.abv = function (originalGravity, finalGravity) {
  //         var abv = ((76.08 * (originalGravity - finalGravity) / (1.775 - originalGravity)) * (finalGravity / 0.794));
  //         return abv;
  //       };

  //     }
  //   };
  // });

  .controller('ABVCtrl', function ($scope, $rootScope) {

    $scope.originalGravity = '1.050';
    $scope.finalGravity = '1.010';

    $scope.abv = function (originalGravity, finalGravity) {
      var abv = ((76.08 * (originalGravity - finalGravity) / (1.775 - originalGravity)) * (finalGravity / 0.794));
      return abv.toFixed(2);
    };

  })

  .controller('boilOffCtrl', function ($scope, $rootScope) {
    

  })

  .controller('diluteCtrl', function ($scope, $rootScope) {
    

  })

  .controller('bottleCarbCtrl', function ($scope, $rootScope) {
    

  })

  .controller('hopTimerCtrl', function ($scope, $rootScope) {
    


  })

  .controller('hydroTempCtrl', function ($scope, $rootScope) {
    $scope.measuredTemp = '120';
    $scope.calTemp = '60';
    $scope.uncorrectedSG = '1.050';
    $scope.degF = true;

    $scope.correctedHydrometer = function (measuredTemp, calTemp, uncorrectedSG) {
      var correctedSG;
      if ($scope.degF === false) {
        measuredTemp = (measuredTemp * 1.8) + 32;
        calTemp = (calTemp * 1.8) + 32;
        correctedSG = parseFloat(uncorrectedSG).toFixed(3) * ((1.00130346 - 0.000134722124 * parseFloat(measuredTemp).toFixed(1) + 0.00000204052596 * Math.pow(parseFloat(measuredTemp).toFixed(1), 2) - 2.32820948e-9 * Math.pow(parseFloat(measuredTemp).toFixed(1), 3)) / (1.00130346 - 0.000134722124 * parseFloat(calTemp).toFixed(1) + 0.00000204052596 * Math.pow(parseFloat(calTemp).toFixed(1), 2) - 2.32820948e-9 * Math.pow(parseFloat(calTemp).toFixed(1), 3)));
        return correctedSG.toFixed(3);
      } else {
        correctedSG = parseFloat(uncorrectedSG).toFixed(3) * ((1.00130346 - 0.000134722124 * parseFloat(measuredTemp).toFixed(1) + 0.00000204052596 * Math.pow(parseFloat(measuredTemp).toFixed(1), 2) - 2.32820948e-9 * Math.pow(parseFloat(measuredTemp).toFixed(1), 3)) / (1.00130346 - 0.000134722124 * parseFloat(calTemp).toFixed(1) + 0.00000204052596 * Math.pow(parseFloat(calTemp).toFixed(1), 2) - 2.32820948e-9 * Math.pow(parseFloat(calTemp).toFixed(1), 3)));
        return correctedSG.toFixed(3);
      }
    };
  })

.controller('refracCtrl', function ($scope, $rootScope) {
  $scope.brix = '13';
  $scope.findSG = function (brix) {
    var specificGravity = (1.000019 + ((0.003865613 * brix) + (0.00001296425 * brix) + (0.00000005701128 * brix)));
    return specificGravity.toFixed(3);
  };
});