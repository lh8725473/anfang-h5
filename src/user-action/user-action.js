angular.module('App.User.Action', []).controller('App.User.Action.Controller', [
    '$scope',
    'User',
    function(
        $scope,
        User
    ) {

        //$scope.news = [1,2,3,2]
        $scope.focus_games = User.getUserFocus()

        // $scope.user.$promise.then(function(user) {
        //     console.log('aa')

        // })



    }
]);