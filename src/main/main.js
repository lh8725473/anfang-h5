angular.module('App.Main', []).controller('App.Main.Controller', [
    '$scope',
    function(
        $scope
    ) {
        $scope.user = User.getUser()

        $scope.user.$promise.then(function(user) {
            console.log('aa')

        })



    }
]);