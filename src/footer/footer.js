angular.module('App.Footer', []).controller('App.Footer.Controller', [
    '$scope',
    '$state',
    function(
        $scope,
        $state
    ) {
        $scope.$state = $state
        console.log($scope.$state)

    }
]);