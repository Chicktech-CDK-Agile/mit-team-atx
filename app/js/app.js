'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', ['ngRoute', 'ui.bootstrap', 'ui.bootstrap.tpls', 'ui.bootstrap.transition', 'myApp.controllers', 'myApp.filters', 'myApp.services', 'myApp.directives', 'firebase']).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home', {templateUrl: 'app/partials/home.html', controller: 'HomeCtrl'});
        $routeProvider.when('/contactus', {templateUrl: 'app/partials/contactus.html', controller: 'ContactUsCtrl'});
        $routeProvider.when('/vehicles', {templateUrl: 'app/partials/vehicles.html', controller: 'VehiclesCtrl'});
        $routeProvider.when('/contactme', {templateUrl: 'app/partials/contactme.html', controller: 'ContactMeCtrl'});
        $routeProvider.when('/featured', {templateUrl: 'app/partials/featured.html', controller: 'FeaturedCtrl'});
        $routeProvider.when('/offers', {templateUrl: 'app/partials/offers.html', controller: 'OffersCtrl'});
        $routeProvider.when('/accessories', {templateUrl: 'app/partials/accessories.html', controller: 'AccessoriesCtrl'});
        $routeProvider.when('/parts-service', {templateUrl: 'app/partials/parts-service.html', controller: 'PartsAndServiceCtrl'});
        $routeProvider.otherwise({redirectTo: '/home'});
    }])
    .constant('CONFIGURL', 'https://resplendent-fire-8954.firebaseio.com')
    .factory('getVehiclesFirebaseStore', ['$firebaseObject', 'CONFIGURL', function($firebaseObject, CONFIGURL) {
        var firebaseStore;
        return function(msg) {
            if(!firebaseStore) {
                var firebaseStore = [];
                var ref = new Firebase(CONFIGURL + '/Vehicles');
                //there are 31 vehicle records in the database - not sure of a better way to do this
                for(var i=1;i<=31;i++) {
                    var vehicle = $firebaseObject(ref.child(i));
                    firebaseStore.push(vehicle);
                }

            }
            return firebaseStore;
        };
    }])
    .factory('getChatFirebaseStore', ['$firebase', 'CONFIGURL', function($firebase, CONFIGURL) {
        var firebaseStore;
        return function(msg) {
            if(!firebaseStore) {
                firebaseStore = new Firebase(CONFIGURL + '/Chat');
            }
            return firebaseStore;
        };
    }]);
