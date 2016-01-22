angular.module('App.GameDetail', []).controller('App.GameDetail.Controller', [
    '$scope',
    '$state',
    function(
        $scope,
        $state
    ) {

        $scope.goDetail = function() {
            $state.go('processDetail', {
                processId: $state.params.gameId
            })
        }



    }
]);