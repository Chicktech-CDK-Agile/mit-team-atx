/**
 * Created by hensleym on 1/13/16.
 */
angular.module('myApp.controllers')
    .controller('ContactMeCtrl', ['$scope', '$modal', 'navService', function($scope, $modal, navService) {
        navService.setActiveTab("contactme");

        $scope.contactinfo = {
            FirstName: '',
            LastName: '',
            PhoneNumber: '',
            Email: ''
        };
        $scope.contactMe = function(widget){
            var modalInstance = $modal.open({
                templateUrl: 'app/partials/modalcontent.html',
                controller: 'ModalInstanceCtrl',
                resolve: {
                    widget: function() {
                        return widget;
                    }
                }
            });
        };
    }]);