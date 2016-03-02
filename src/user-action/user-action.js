angular.module('App.User.Action', []).controller('App.User.Action.Controller', [
    '$scope',
    'User',
    '$state',
    function(
        $scope,
        User,
        $state
    ) {

        //$scope.news = [1,2,3,2]
        $scope.focus_games = User.getUserFocus()

        $scope.focus_games.$promise.then(function(game) {
            
        })

        $scope.deleteFocus = function($event, game_id, index){
            $event.stopPropagation();
            $event.preventDefault();
            var index = index;
            $scope.focus_games.splice(index, 1);
            $.ajax({
                url: config.API_ROOT + "/api/v1/match/focus/" + game_id,
                type: "DELETE",
                success: function(data) {
                    alert('取消关注成功')
                },
                error: function(respon) {
                    alert(respon)
                }
            });
        };

        $scope.goEnroll = function($event, game_id) {
            $event.stopPropagation();
            $event.preventDefault();
            $state.go('enroll', {
                enroll_id: game_id
            });
        };

        // $scope.user.$promise.then(function(user) {
        //     console.log('aa')

        // })



    }
]);