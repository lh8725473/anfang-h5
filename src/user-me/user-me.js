angular.module('App.User.Me', []).controller('App.User.Me.Controller', [
    '$scope',
    'User',
    function(
        $scope,
        User
    ) {

        //$scope.news = [1,2,3,2]
        $scope.user = User.getUserProfile()

        // $scope.user.$promise.then(function(user) {
        //     console.log('aa')

        // })



    }
]);