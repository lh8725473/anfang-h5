angular.module('App.Models').factory('User', [
    '$resource',
    function(
        $resource
    ) {
        return $resource('/api/v1/accounts', {}, {
            getUser: {
                method: "GET",
                params: {

                }
            },
            'delete': {
                method: "DELETE",
                params: {
                    action: 'delete',
                    id: ''
                }
            }

        })
    }
])