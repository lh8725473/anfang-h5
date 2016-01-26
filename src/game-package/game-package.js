angular.module('App.GamePackage', []).controller('App.GamePackage.Controller', [
    '$scope',
    '$state',
    function(
        $scope,
        $state
    ) {
        $scope.$state = $state

        $scope.data = [
        {
            name: "AiA",
            code: "撒旦撒东方闪电",
            limit: 25000,
            account: "Life Insurance"
        },
        {
            name: "Cargills",
            code: "撒旦撒东方闪电",
            limit: 30000,
            account: "Food City"
        }
    ]

    }
]);