angular.module('App.GamePersonSignDetail', []).controller('App.GamePersonSignDetail.Controller', [
    '$scope',
    '$state',
    'Event',
    function(
        $scope,
        $state,
        Event
    ) {
        $scope.$state = $state

        $scope.getOrderConfirm = Event.getOrderConfirm({
            id: $state.params.person_sign_id
        })

        $scope.postOrderConfirm = function() {
            Event.postOrderConfirm({
                id: $state.params.person_sign_id
            },{

            }).$promise.then(function(reps) {
                
            }, function(error) {
                debugger
            });
        }

    }
]);