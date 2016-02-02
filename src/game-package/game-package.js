angular.module('App.GamePackage', []).controller('App.GamePackage.Controller', [
    '$scope',
    '$state',
    'Product',
    function(
        $scope,
        $state,
        Product
    ) {
        $scope.$state = $state

        $scope.product_list = Product.getProductLsit({})

    }
]);