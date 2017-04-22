/**
 * Created by hensleym on 1/13/16.
 */
angular.module('myApp.controllers')
    .controller('HomeCtrl', ['$scope', '$location', 'navService', function($scope, $location, navService) {
        navService.setActiveTab("home");

        $scope.go = function(path) {
            $location.path(path);
        }
        var cities = [
            {
                city : 'Toronto',
                desc : 'Excellence motors Toronto',
                lat : 43.7000,
                long : -79.4000
            },
            {
                city : 'New York',
                desc : 'Excellence Motors New york',
                lat : 40.6700,
                long : -73.9400
            },
            {
                city : 'Chicago',
                desc : 'Excellence Motors Chicago',
                lat : 41.8819,
                long : -87.6278
            },
            {
                city : 'Los Angeles',
                desc : 'Excellence Motors Los Angeles',
                lat : 34.0500,
                long : -118.2500
            },
            {
                city : 'Las Vegas',
                desc : 'Excellence Motors Las Vegas',
                lat : 36.0800,
                long : -115.1522
            },
            {
                city : 'Austin',
                desc : 'Excellence Motors Austin',
                lat : 30.2672,
                long : -97.7431

            }
        ];
        var mapOptions = {
            zoom: 4,
            center: new google.maps.LatLng(40.0000, -98.0000),
            mapTypeId: google.maps.MapTypeId.TERRAIN
        }

        $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

        $scope.markers = [];

        var infoWindow = new google.maps.InfoWindow();

        var createMarker = function (info){

            var marker = new google.maps.Marker({
                map: $scope.map,
                position: new google.maps.LatLng(info.lat, info.long),
                title: info.city
            });
            marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';

            google.maps.event.addListener(marker, 'click', function(){
                infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
                infoWindow.open($scope.map, marker);
            });

            $scope.markers.push(marker);

        }

        for (i = 0; i < cities.length; i++){
            createMarker(cities[i]);
        }

        $scope.openInfoWindow = function(e, selectedMarker){
            e.preventDefault();
            google.maps.event.trigger(selectedMarker, 'click');
        }



    }]);

