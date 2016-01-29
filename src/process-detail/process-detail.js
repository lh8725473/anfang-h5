angular.module('App.ProcessDetail', []).controller('App.ProcessDetail.Controller', [
    '$scope',
    '$state',
    'Game',
    function(
        $scope,
        $state,
        Game
    ) {

        console.log($state)
        //$scope.news = [1,2,3,2]
        // $scope.user = User.getUser()

        // $scope.user.$promise.then(function(user) {
        //     console.log('aa')

        // })

        $scope.game_detail = Game.getGameDetail({
            id: $state.params.process_id
        })

        $scope.event_list = Game.getEventList({
            id: $state.params.process_id
        })

        $scope.goEnroll = function(){
            $state.go('enroll', {
                enroll_id: $state.params.process_id
            })
        }



    }
]);