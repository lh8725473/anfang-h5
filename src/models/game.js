angular.module('App.Models').factory('Game', [
    '$resource',
    function(
        $resource
    ) {
        return $resource('http://123.56.79.196' + '/api/v1/match/game', {}, {
            getGameList: {
                method: "GET",
                params: {

                },
            isArray: true
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