angular.module('App.User.Integration', []).controller('App.User.Integration.Controller', [
    '$scope',
    'User',
    function(
        $scope,
        User
    ) {
        $scope.integral = User.getUserIntegral();

        $scope.integral.$promise.then(function(integral) {
            if(!integral.points){
                integral.points = 0;
            }
        })
    }
]);