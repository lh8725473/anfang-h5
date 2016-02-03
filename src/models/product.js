angular.module('App.Models').factory('Product', [
    '$resource',
    function(
        $resource
    ) {
        return $resource(config.API_ROOT + '/api/v1/product', {}, {
            getProductLsit: {
                method: "GET",
                params: {
                    
                },
                isArray: true
            }

        })
    }
])