angular.module('App.Loading', []).controller('App.Loading.Controller', [
    '$scope',
    '$timeout',
    function(
        $scope,
        $timeout
    ) {
        $scope.loading = true

        $scope.$on('$includeContentLoaded', function() {
            $timeout(function() {
                $scope.loading = false
                console.log('11')
            }, 2000)
        });

    }
]);