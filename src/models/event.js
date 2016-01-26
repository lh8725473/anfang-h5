angular.module('App.Models').factory('Event', [
    '$resource',
    function(
        $resource
    ) {
        return $resource('http://123.56.79.196' + '/api/v1/match/game/:id/:event', {}, {
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
            }


        })
    }
])