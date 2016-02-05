angular.module('App.Models').factory('Core', [
    '$resource',
    function(
        $resource
    ) {
        return $resource(config.API_ROOT + '/api/v1/core/:action/:id', {}, {
            getDataAll: {
                method: "GET",
                params: {
                    action: 'data_all'
                },
                isArray: true
            },
            getDtaChild: {
                method: "GET",
                params: {
                    id: '',
                    action: 'data_child'
                },
                isArray: true
            },
            getUserFocus: {
                method: "GET",
                params: {
                    action: 'focus_game'
                },
                isArray: true
            }

        })
    }
])