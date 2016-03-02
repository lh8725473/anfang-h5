angular.module('App.Models').factory('Product', [
    '$resource',
    function(
        $resource
    ) {
        return $resource(config.API_ROOT + '/api/v1/product?event=:event_id', {}, {
            getProductList: {
                method: "GET",
                params: {
                    event_id: ''
                },
                isArray: true
            }

        })
    }
])