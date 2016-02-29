angular.module('App.Models').factory('Game', [
    '$resource',
    function(
        $resource
    ) {
        return $resource(config.API_ROOT + '/api/v1/match/game/:id/:event', {}, {
            getGameList: {
                method: "get",
                params: {

                },
                isArray: true
            },
            getGameDetail: {
                method: "get",
                params: {
                    id: ''
                }
            },
            getEventList:{
                method: "get",
                params: {
                    event: 'event'
                },
                isArray: true
            },
            signed:{
                method: "get",
                params: {
                    event: 'signed'
                }
            }

        })
    }
])