angular.module('App.GameList.List', []).controller('App.GameList.List.Controller', [
    '$scope',
    '$sce',
    'Game',

    function(
        $scope,
        $sce,
        Game
    ) {
        $scope.$sce = $sce
        //$scope.news = [1,2,3,2]
        // $scope.user = User.getUser()

        // $scope.user.$promise.then(function(user) {
        //     console.log('aa')

        // })

        $scope.game_list = Game.getGameList()

        $scope.game_list.$promise.then(function(game) {
            
        })

        $scope.trustAsHtml = function(game){
            return $sce.trustAsHtml(game.introduce)
        }



    }
]);