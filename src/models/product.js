angular.module('App.Models').factory('Product', [
    '$resource',
    function(
        $resource
    ) {
        return $resource('http://www.niren.org' + '/api/v1/product', {}, {
            getProductLsit: {
                method: "GET",
                params: {
                    
                },
                isArray: true
            }

        })
    }
])