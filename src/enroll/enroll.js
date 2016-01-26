angular.module('App.Enroll', []).controller('App.Enroll.Controller', [
    '$scope',
    '$state',
    'Game',
    function(
        $scope,
        $state,
        Game
    ) {
        $scope.$state = $state

        $scope.event_list = Game.getEventList({
            id: $state.params.enroll_id
        })

    }
]);