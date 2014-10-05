'use strict';

angular.module('brewAssist')
  .controller('ABVCtrl', function ($scope, $rootScope) {
    $scope.originalGravity = '1.050';
    $scope.finalGravity = '1.012';

    $scope.abv = function (originalGravity, finalGravity) {
      var abv = ((76.08 * (originalGravity - finalGravity) / (1.775 - originalGravity)) * (finalGravity / 0.794));
      return abv.toFixed(2);
    };

  })

  .controller('boilOffGravCtrl', function ($scope, $rootScope) {
    $scope.wortVol = '7.0';
    $scope.currentGrav = '1.040';
    $scope.targetVol = '5.5';

    $scope.gravDiff = function (wortVol, currentGrav, targetVol) {
      var newGravity = (wortVol * ((currentGrav * 1000) - 1000) / targetVol);
      newGravity = ((newGravity + 1000) / 1000);
      var gravDiff = (newGravity - currentGrav);
      return gravDiff.toFixed(3);
    };

    $scope.boilOffGrav = function (wortVol, currentGrav, targetVol) {
      var newGravity = (wortVol * ((currentGrav * 1000) - 1000) / targetVol);
      newGravity = ((newGravity + 1000) / 1000);
      return newGravity.toFixed(3);
    };

  })

  .controller('boilOffVolCtrl', function ($scope, $rootScope) {
    $scope.wortVol = '4.0';
    $scope.currentGrav = '1.069';
    $scope.desiredGrav = '1.050';

    $scope.volDiff = function (wortVol, currentGrav, desiredGrav) {
      var newVol = (wortVol * ((currentGrav * 1000) - 1000) / ((desiredGrav * 1000) - 1000));
      var volDiff = (newVol - wortVol);
      return volDiff.toFixed(2);
    };

    $scope.boilOffVol = function (wortVol, currentGrav, desiredGrav) {
      var newVolume = (wortVol * ((currentGrav * 1000) - 1000) / ((desiredGrav * 1000) - 1000));
      return newVolume.toFixed(2);
    };
  })

  .controller('bottleCarbCtrl', function ($scope, $rootScope) {
    

  })

  .controller('hopTimerCtrl', function ($scope, $rootScope) {
    


  })

  .controller('hydroTempCtrl', function ($scope, $rootScope) {
    $scope.measuredTemp = '120';
    $scope.calTemp = '60';
    $scope.uncorrectedSG = '1.040';
    $scope.hydroDegF = true;

    $scope.hydroConvert = function () {
      if (!$scope.hydroDegF) {
        $scope.measuredTemp = '50';
        $scope.calTemp = '16';
      } else {
        $scope.measuredTemp = '120';
        $scope.calTemp = '60';
      }
    };

    $scope.correctedHydrometer = function (measuredTemp, calTemp, uncorrectedSG) {
      var correctedSG;
      if (!$scope.hydroDegF) {
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

  .controller('mashWaterCtrl', function ($scope, $rootScope) {
    $scope.initMashTemp = '120';
    $scope.targetMashTemp = '150';
    $scope.currentWater = '10';
    $scope.waterTemp = '200';
    $scope.grainWeight = '8';
    $scope.mashDegF = true;
    var mashWater;

    $scope.mashConvert = function () {
      if (!$scope.mashDegF) {
        $scope.initMashTemp = '50';
        $scope.targetMashTemp = '65';
        $scope.currentWater = '5';
        $scope.waterTemp = '95';
        $scope.grainWeight = '4';
      } else {
        $scope.initMashTemp = '120';
        $scope.targetMashTemp = '150';
        $scope.currentWater = '10';
        $scope.waterTemp = '200';
        $scope.grainWeight = '8';
      }
    };

    $scope.mashWater = function (initMashTemp, targetMashTemp, currentWater, waterTemp, grainWeight) {
      if (!$scope.mashDegF) {
        mashWater = ((targetMashTemp - initMashTemp) * ((0.41 * grainWeight) + parseFloat(currentWater)) / (waterTemp - targetMashTemp));
        return mashWater.toFixed(1);
      } else {
        mashWater = ((targetMashTemp - initMashTemp) * ((0.2 * grainWeight) + parseFloat(currentWater)) / (waterTemp - targetMashTemp));
        return mashWater.toFixed(1);
      }
    };
  })

  .controller('refracCtrl', function ($scope, $rootScope) {
    $scope.brix = '13';
    $scope.findSG = function (brix) {
      var specificGravity = (1.000019 + ((0.003865613 * brix) + (0.00001296425 * brix) + (0.00000005701128 * brix)));
      return specificGravity.toFixed(3);
    };
  })

  .controller('strikeTempCtrl', function ($scope, $rootScope) {
    $scope.strikeDegF = true;
    $scope.ratio = '1.25';
    $scope.initMashTemp = '70';
    $scope.targetMashTemp = '150';
    var strikeTemp;

    $scope.strikeConvert = function () {
      if (!$scope.strikeDegF) {
        $scope.ratio = '2.5';
        $scope.initMashTemp = '20';
        $scope.targetMashTemp = '75';
      } else {
        $scope.ratio = '1.25';
        $scope.initMashTemp = '70';
        $scope.targetMashTemp = '150';
      }
    };

    $scope.strikeTemp = function (ratio, initMashTemp, targetMashTemp) {
      if (!$scope.strikeDegF) {
        strikeTemp = ((0.41 / ratio) * (targetMashTemp - initMashTemp) + parseFloat(targetMashTemp));
        return strikeTemp.toFixed(1);
      } else {
        strikeTemp = ((0.2 / ratio) * (targetMashTemp - initMashTemp) + parseFloat(targetMashTemp));
        return strikeTemp.toFixed(1);
      }
    };
  });