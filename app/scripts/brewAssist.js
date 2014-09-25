'use strict';

angular.module('brewAssist', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ngRoute', 'firebase'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/login.html',
        controller: 'LoginCtrl'
      })
      .when('/main', {
        templateUrl: 'partials/main.html',
        controller: 'MainCtrl'
      })
      .when('/profile', {
        templateUrl: 'partials/profile.html',
        controller: 'MainCtrl'
      })
      .when('/modules', {
        templateUrl: 'partials/modules.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/main'
      });
  })
;

// brewAssist.service('loginService',function(){

// });
