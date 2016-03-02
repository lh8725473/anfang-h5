angular.module('App.GameList.List', []).controller('App.GameList.List.Controller', [
    '$scope',
    '$state',
    'Game',

    function(
        $scope,
        $state,
        Game
    ) {
        //$scope.$sce = $sce
        //$scope.news = [1,2,3,2]
        // $scope.user = User.getUser()

        // $scope.user.$promise.then(function(user) {
        //     console.log('aa')

        // })

        
        $scope.goEnroll = function($event, game_id) {
            $event.stopPropagation()
            $event.preventDefault()
            $state.go('enroll', {
                enroll_id: game_id
            })
        }

        $scope.$on('searchGameList', function($event, month, city) {
            $scope.game_list = Game.getGameList({
                cid: city,
                month: month
            })
        })

        $scope.focusMatch = function($event, game_id) {
            $event.stopPropagation()
            $event.preventDefault()
            $.ajax({
                url: config.API_ROOT + "/api/v1/match/focus/" + game_id,
                type: "POST",
                success: function(data) {
                    alert('关注成功')
                },
                error: function(respon) {
                    debugger
                }
            })
        }


    }
]);