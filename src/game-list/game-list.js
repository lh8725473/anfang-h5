angular.module('App.GameList', ['App.GameList.Carousel','App.GameList.List']).controller('App.GameList.Controller', [
    '$scope',
    '$state',
    'User',
    function(
        $scope,
        $state,
        User
    ) {
        $scope.$state = $state
        //$scope.news = [1,2,3,2]
        // $scope.user = User.getUser()

        // $scope.user.$promise.then(function(user) {
        //     console.log('aa')

        // })



    }
]);