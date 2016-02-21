angular.module('App.GamePackage', []).controller('App.GamePackage.Controller', [
    '$scope',
    '$state',
    'Product',
    'Event',
    function(
        $scope,
        $state,
        Product,
        Event
    ) {
        $scope.$state = $state

        $scope.product_list = Product.getProductLsit({})

        var product_id = ''
        $scope.changeCheckbox = function(product, $event) {
            $event.stopPropagation()
            //$event.preventDefault()
            if(!product.checkbox){
                product.checkbox = false
                product.show = false
                product_id = ''
            }else{
                $scope.product_list.forEach(function(product) {
                    product.checkbox = false
                })
                product.checkbox = true
                product.show = true
                product_id = product.id
            }
        }


        $scope.changeDetail = function(product) {
            product.show = !product.show
        }

        $scope.postPersonSignProduct = function() {
            Event.postPersonSignProduct({
                id: $state.params.person_sign_id
            }, {
                "product_id": product_id
            }).$promise.then(function(reps) {
                $state.go('game-person-sign-detail', {
                    person_sign_id: $state.params.person_sign_id
                })
            }, function(error) {
                debugger
            });
        }

    }
]);