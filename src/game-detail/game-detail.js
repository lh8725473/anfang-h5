angular.module('App.GameDetail', []).controller('App.GameDetail.Controller', [
    '$scope',
    '$state',
    'Game',
    function(
        $scope,
        $state,
        Game
    ) {

        $scope.goDetail = function() {
            $state.go('process-detail', {
                process_id: $state.params.game_id
            })
        }

        $scope.game_detail = Game.getGameDetail({
            id: $state.params.game_id
        })

    }
]);