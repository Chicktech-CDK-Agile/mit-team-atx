/**
 * Created by hensleym on 1/13/16.
 */
angular.module('myApp.controllers')
    .controller('PartsAndServiceCtrl', function($scope,$modal, navService){
        navService.setActiveTab("partsandservice");

        $scope.partsService = function(widget){
            var modalInstance = $modal.open({
                templateUrl: 'app/partials/partsservicemodal.html',
                controller: 'ModalInstanceCtrl',
                resolve: {
                    widget: function() {
                        return widget;
                    }
                }
            });
        }
    });
