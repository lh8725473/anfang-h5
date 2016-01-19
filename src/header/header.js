angular.module('App.Header', []).controller('App.Header.Controller', [
    '$scope',
    'User',
    function(
        $scope,
        User
    ) {
        $scope.user = User.getUser()

        $scope.user.$promise.then(function(user) {
            console.log('aa')

        })



    }
]);