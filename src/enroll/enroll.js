angular.module('App.Enroll', []).controller('App.Enroll.Controller', [
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